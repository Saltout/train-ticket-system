const milesConv = 1.60934;
const toMeters = 1000;

export function getTravelTime(distanceData: JSON) {
  const avarageSpeed = 27; //100 km/h = 27,7777778 m/s
  const distance = Number(distanceData['data']) * milesConv * toMeters;

  const timeInSeconds = distance / avarageSpeed;
  return new Date(timeInSeconds * 1000).toISOString().substring(11, 16);
}
