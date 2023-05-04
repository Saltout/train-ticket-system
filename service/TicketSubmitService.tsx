import { TicketValues } from '../Model/TicketValues';
import { getCitiesData } from '../Data/Data';

export function Handle(values: TicketValues) {
  const destination = values.destinations;
  const passenferType = values.passengerType;
  const cities = getCitiesData();

  if (cities.indexOf(destination.startDestination.toLocaleLowerCase()) > -1) {
    console.log('yes');
  }
}
