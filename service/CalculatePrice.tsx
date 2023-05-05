import { PassengerType } from '../Model/PassengerType';
import { getPricePerKilometer } from '../Data/PriceData';

const priceForKilometer = getPricePerKilometer();
const milesConvertor = 1.60934;

export function calculatePrice(
  distanceData: JSON,
  passengerType: PassengerType
): Number {
  const distance = Number(distanceData['data']) * milesConvertor;

  let price = distance * priceForKilometer;

  if (passengerType != PassengerType.NONE) {
    price = price * 0.5;
  }

  return price;
}
