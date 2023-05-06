import * as React from 'react';
import { PassengerType } from '../Model/PassengerType';
import { Destinations } from '../Model/Destinations';
import './Styles/InputFormStyle.css';

interface TicketInputForm {
  destination: Destinations;
  passengerType: PassengerType;
  onInputChange: (field: string, value: string | PassengerType) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const passengerTypeOptions = [
  { value: PassengerType.NONE, label: 'None' },
  { value: PassengerType.STUDENT_UNDER_18, label: 'Student <18' },
  { value: PassengerType.STUDENT_ISIC, label: 'Student ISIC' },
  { value: PassengerType.SENIOR, label: 'Senior' },
  { value: PassengerType.ZTP, label: 'ZTP' },
];

export default function InputFormComponent({
  destination,
  passengerType,
  onInputChange,
  onSubmit,
}: TicketInputForm) {
  return (
    <div className="inputForm-class">
      <h1>Enter Your Destinations</h1>
      <form onSubmit={onSubmit}>
        <label>Start Destination:</label>
        <input
          type="text"
          id="start-destination"
          name="start-destination"
          value={destination.startDestination}
          onChange={(e) => onInputChange('startDestination', e.target.value)}
        />
        <br />
        <br />

        <label>End Destination:</label>
        <input
          type="text"
          id="end-destination"
          name="end-destination"
          value={destination.endDestination}
          onChange={(e) => onInputChange('endDestination', e.target.value)}
        />
        <br />
        <br />

        <label>Passenger Type:</label>
        <select
          value={passengerType}
          onChange={(e) =>
            onInputChange('passengerType', e.target.value as PassengerType)
          }
        >
          {passengerTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
