import * as React from 'react';
import { useState } from 'react';
import InputForm from './Components/InputForm';
import './style.css';

export default function MyComponentContainer() {
  const [startDestination, setStartDestination] = useState('');
  const [endDestination, setEndDestination] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Start Destination:', startDestination);
    console.log('End Destination:', endDestination);
    // Here you can perform any other processing with the form data
  };

  return (
    <InputForm
      startDestination={startDestination}
      endDestination={endDestination}
      onInputChange={(field, value) => {
        if (field === 'startDestination') {
          setStartDestination(value);
        } else if (field === 'endDestination') {
          setEndDestination(value);
        }
      }}
      onSubmit={handleSubmit}
    />
  );
}
