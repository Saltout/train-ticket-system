export async function getDistance(startCity: String, endCity: String) {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${startCity}/distance?toCityId=${endCity}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ba06e59708msh024d2e3db4b9f96p1eb9a3jsn90c7cdbcc133',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
