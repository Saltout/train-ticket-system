import { PassengerType } from '../Model/PassengerType';

const priceForKilometer = 3;
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
