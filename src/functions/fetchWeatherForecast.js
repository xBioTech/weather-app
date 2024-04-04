async function fetchWeatherForecast() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5ef2cc7df56f4d9494d203100242002&q=karlsruhe&days=3', { mode: 'cors' });
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchWeatherForecast;
