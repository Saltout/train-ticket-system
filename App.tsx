import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Enter Your Destinations</h1>
      <form>
        <label>Start Destination:</label>
        <input type="text" id="start-destination" name="start-destination" />
        <br />
        <br />

        <label>End Destination:</label>
        <input type="text" id="end-destination" name="end-destination" />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
