import { PassengerType } from '../Model/PassengerType';

export interface Ticket {
  start: string;
  end: string;
  price: number;
  travelTime: Date;
  discount: PassengerType;
}
