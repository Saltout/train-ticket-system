import * as React from 'react';
import { useState } from 'react';
import InputForm from './Components/InputForm';
import { DestinationsValues } from './Components/InputForm';
import { Handle } from './service/TicketSubmitService';
import './Styles/style.css';

export default function MyComponentContainer() {
  const [values, setValues] = useState<DestinationsValues>({
    startDestination: '',
    endDestination: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Handle(values);
  };

  return (
    <InputForm
      values={values}
      onInputChange={(field, value) => {
        setValues((prevState) => ({
          ...prevState,
          [field]: value,
        }));
      }}
      onSubmit={handleSubmit}
    />
  );
}
