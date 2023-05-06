import * as React from 'react';
import './Styles/ButtonStyle.css';

function TicketPageButton(props) {
  return (
    <button className="ticketPageButton" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default TicketPageButton;
