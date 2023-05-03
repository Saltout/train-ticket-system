import * as React from 'react';

interface Destinations {
  startDestination: string;
  endDestination: string;
  onInputChange: (field: string, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function InputFormComponent({
  startDestination,
  endDestination,
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
          value={startDestination}
          onChange={(e) => onInputChange('startDestination', e.target.value)}
        />
        <br />
        <br />

        <label>End Destination:</label>
        <input
          type="text"
          id="end-destination"
          name="end-destination"
          value={endDestination}
          onChange={(e) => onInputChange('endDestination', e.target.value)}
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
