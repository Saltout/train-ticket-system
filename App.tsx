import * as React from 'react';
import { useState } from 'react';
import InputForm from './Components/InputForm';
import { Destinations } from './Model/Destinations';
import { TicketValues } from './Model/TicketValues';
import { PassengerType } from './Model/PassengerType';
import { Handle } from './service/TicketSubmitService';
import './Styles/style.css';

export default function MyComponentContainer() {
  const [destination, setDestination] = useState<Destinations>({
    startDestination: '',
    endDestination: '',
  });

  const [passengerType, setPassengerType] = useState(PassengerType.NONE);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit button clicked');
    const ticketValues: TicketValues = {
      destinations: destination,
      passengerType: passengerType,
    };
    Handle(ticketValues);
  };

  return (
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
  );
}
