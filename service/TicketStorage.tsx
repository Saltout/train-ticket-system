import { Ticket } from '../Model/Ticket';

const tickets: Array<Ticket> = [];

export function addTicket(value: Ticket) {
  tickets.push(value);
}

export function getTickets() {
  return tickets;
}
