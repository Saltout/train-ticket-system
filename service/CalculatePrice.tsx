import { PassengerType } from '../Model/PassengerType';
import { getPricePerKilometer } from '../Data/PriceData';

const priceForKilometer = getPricePerKilometer();
const milesConv = 1.60934;

export function calculatePrice(
  distanceData: JSON,
  passengerType: PassengerType
): number {
  const distance = Number(distanceData['data']) * milesConv;

  let price = distance * priceForKilometer;

  if (passengerType != PassengerType.NONE) {
    price = price * 0.5;
  }

  return price;
}
