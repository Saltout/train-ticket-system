import { TicketValues } from '../Model/TicketValues';
import { getCitiesData } from '../Data/Data';
import { getDistance } from './GetDistance';
import { calculatePrice } from './CalculatePrice';

export function Handle(values: TicketValues) {
  const destination = values.destinations;
  const passengerType = values.passengerType;
  const cities = getCitiesData();

  const start = cities.get(destination.startDestination.toLocaleLowerCase());
  const end = cities.get(destination.endDestination.toLocaleLowerCase());

  if (start != null && end != null) {
    const distance = getDistance(start, end);

    distance.then((result) => {
      const price = calculatePrice(result, passengerType);
      console.log(price);
    });
  }
}
