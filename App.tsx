import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import InputForm from './Components/InputForm';
import TicketPageButton from './Components/TicketPageButtonComponent';
import { Destinations } from './Model/Destinations';
import { TicketValues } from './Model/TicketValues';
import { PassengerType } from './Model/PassengerType';
import { Handle } from './service/TicketSubmitService';
import './Styles/style.css';

export default function InputFormContainer() {
  const [destination, setDestination] = useState<Destinations>({
    startDestination: 'pardubice',
    endDestination: 'praha',
  });

  const [passengerType, setPassengerType] = useState(PassengerType.NONE);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ticketValues: TicketValues = {
      destinations: destination,
      passengerType: passengerType,
    };
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
    </div>
  );
}
