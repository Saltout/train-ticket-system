import * as React from 'react';

function TicketPageButton(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

export default TicketPageButton;
