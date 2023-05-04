import { TicketValues } from '../Model/TicketValues';
import { getCitiesData } from '../Data/Data';
import { getDistance } from './GetDistance';
import { calculatePrice } from './CalculatePrice';

export function Handle(values: TicketValues) {
  const destination = values.destinations;
  const passengerType = values.passengerType;
  const cities = getCitiesData();
  const distance = getDistance('Q36989', 'Q1085').then();

  distance.then((result) => {
    const price = calculatePrice(result, passengerType);
    console.log(price);
  });

  if (cities.indexOf(destination.startDestination.toLocaleLowerCase()) > -1) {
    console.log('yes');
  }
}
