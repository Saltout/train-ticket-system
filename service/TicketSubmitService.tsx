import { TicketValues } from '../Model/TicketValues';

export function Handle(values: TicketValues) {
  const destination = values.destinations;
  const passenferType = values.passengerType;

  console.log(destination.startDestination);
  console.log(destination.endDestination);
  console.log(passenferType);
}
