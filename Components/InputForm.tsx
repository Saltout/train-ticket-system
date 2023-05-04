import * as React from 'react';

export interface DestinationsValues {
  startDestination: string;
  endDestination: string;
}

interface Destinations {
  values: DestinationsValues;
  onInputChange: (field: string, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function InputFormComponent({
  values,
  onInputChange,
  onSubmit,
}: Destinations) {
  return (
    <div>
      <h1>Enter Your Destinations</h1>
      <form onSubmit={onSubmit}>
        <label>Start Destination:</label>
        <input
          type="text"
          id="start-destination"
          name="start-destination"
          value={values.startDestination}
          onChange={(e) => onInputChange('startDestination', e.target.value)}
        />
        <br />
        <br />

        <label>End Destination:</label>
        <input
          type="text"
          id="end-destination"
          name="end-destination"
          value={values.endDestination}
          onChange={(e) => onInputChange('endDestination', e.target.value)}
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
