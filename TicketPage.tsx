import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { renderTicket } from './Components/TicketComponent';
import TicketPageButton from './Components/TicketPageButtonComponent';
import * as TicketStorage from './service/TicketStorage';
import './Styles/TicketPage.css';

export default function TicketPage() {
  const tickets = TicketStorage.getTickets();
  const navigate = useNavigate();

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div>
      <h1>Ticket Page</h1>
      {tickets.map((ticket, index) => (
        <div key={index}>{renderTicket(ticket)}</div>
      ))}
      <div className="ticketPageButton">
        <TicketPageButton label="Back" onClick={handleClick} />
      </div>
    </div>
  );
}
