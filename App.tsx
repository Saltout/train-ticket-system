import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from './Components/InputForm';
import TicketPageButton from './Components/TicketPageButtonComponent';
import SubmitPopup from './Components/SubmitPopup';
import { Destinations } from './Model/Destinations';
import { TicketValues } from './Model/TicketValues';
import { PassengerType } from './Model/PassengerType';
import { Handle } from './service/TicketSubmitService';
import { getCitiesData } from './Data/Cities';

const closePopupInSeconds = 1000;

export default function InputFormContainer() {
  const [destination, setDestination] = useState<Destinations>({
    startDestination: 'pardubice',
    endDestination: 'praha',
  });

  const [passengerType, setPassengerType] = useState(PassengerType.NONE);
  const [showPopup, setShowPopup] = useState(false);
  const [popupHeader, setPopupHeader] = useState('Success');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ticketValues: TicketValues = {
      destinations: destination,
      passengerType: passengerType,
    };

    if (ValidateInput(destination)) {
      setPopupHeader('Success');
    } else {
      setPopupHeader('Error: Invalid destination');
    }
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, closePopupInSeconds);

    Handle(ticketValues);
  };

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/TicketPage');
  };

  return (
    <div>
      <div>
        <InputForm
          destination={destination}
          passengerType={passengerType}
          onInputChange={(field, value) => {
            if (field === 'passengerType') {
              setPassengerType(value as PassengerType);
            } else {
              setDestination((prevState) => ({
                ...prevState,
                [field]: value,
              }));
            }
          }}
          onSubmit={handleSubmit}
        />
      </div>
      <div className="ticketPageButton">
        <TicketPageButton label="Tickets" onClick={handleClick} />
      </div>
      <div>
        <SubmitPopup trigger={showPopup} header={popupHeader} />
      </div>
    </div>
  );
}

function ValidateInput(values: Destinations): boolean {
  const cities = getCitiesData();

  const start = cities.get(values.startDestination.toLocaleLowerCase());
  const end = cities.get(values.endDestination.toLocaleLowerCase());
  return start != null && end != null;
}
