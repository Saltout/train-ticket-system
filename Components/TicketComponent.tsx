import * as React from 'react';
import { Ticket } from '../Model/Ticket';
import './Styles/TicketStyle.css';

export function renderTicket(ticket: Ticket): JSX.Element {
  return (
    <div className="Ticket-component">
      <h2>Ticket</h2>
      <p>Start: {ticket.start}</p>
      <p>End: {ticket.end}</p>
      <p>Price: {ticket.price}</p>
      <p>Travel Time: {ticket.travelTime}</p>
      <p>Discount: {ticket.discount}</p>
    </div>
  );
}
