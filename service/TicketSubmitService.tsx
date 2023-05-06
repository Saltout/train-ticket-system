import { TicketValues } from '../Model/TicketValues';
import { getCitiesData } from '../Data/Cities';
import { getDistance } from './GetDistance';
import { calculatePrice } from './CalculatePrice';
import { getTravelTime } from './CalculateTravelTime';
import * as TicketSorage from './TicketStorage';
import { renderTicket } from '../Components/TicketComponent';

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
      const time = getTravelTime(result);
      TicketSorage.addTicket({
        start: destination.startDestination,
        end: destination.endDestination,
        price: price,
        travelTime: time,
        discount: passengerType,
      });
      console.table(TicketSorage.getTickets());
    });
  }
}
