import * as React from 'react';
import { Ticket } from '../Model/Ticket';
import './Styles/TicketStyle.css';

export function renderTicket(ticket: Ticket): JSX.Element {
  return (
    <div className="Ticket-component">
      <h2>Ticket</h2>
      <div className="ticket-info">
        <p>
          <span>Start:</span> {formatOutput(ticket.start)}
        </p>
        <p>
          <span>End:</span> {formatOutput(ticket.end)}
        </p>
      </div>
      <p>
        <span>Price:</span> {ticket.price}
      </p>
      <p>
        <span>Travel Time:</span> {ticket.travelTime}
      </p>
      <p>
        <span className="discount">Discount:</span> {ticket.discount}
      </p>
    </div>
  );
}

function formatOutput(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
