import { Destinations } from '../Model/Destinations';
import { PassengerType } from '../Model/PassengerType';

export interface TicketValues {
  destinations: Destinations;
  passengerType: PassengerType;
}
