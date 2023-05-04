import * as React from 'react';
import { PassengerType } from '../Model/PassengerType';
import { Destinations } from '../Model/Destinations';

interface TicketInputForm {
  destination: Destinations;
  passengerType: PassengerType;
  onInputChange: (field: string, value: string | PassengerType) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const passengerTypeOptions = [
  { value: PassengerType.NONE, label: PassengerType.NONE },
  { value: PassengerType.STUDENT_UNDER_18, label:  PassengerType.STUDENT_UNDER_18 },
  { value: PassengerType.STUDENT_ISIC, label: PassengerType.STUDENT_ISIC },
  { value: PassengerType.SENIOR, label: PassengerType.SENIOR },
  { value: PassengerType.VZP, label: PassengerType.VZP },
];

export default function InputFormComponent({
  destination,
  passengerType,
  onInputChange,
  onSubmit,
}: TicketInputForm) {
  return (
    <div>
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
            onInputChange('passangerType', e.target.value as PassengerType)
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
