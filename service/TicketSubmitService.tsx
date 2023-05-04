import { TicketValues } from '../Model/TicketValues';
import { getCitiesData } from '../Data/Data';

export function Handle(values: TicketValues) {
  const destination = values.destinations;
  const passenferType = values.passengerType;

  const fileData = getCitiesData();
  console.log(destination.startDestination);
  console.log(destination.endDestination);
  console.log(passenferType);
  console.log(fileData);
}
