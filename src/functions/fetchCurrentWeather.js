async function fetchCurrentWeather() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=5ef2cc7df56f4d9494d203100242002&q=london', { mode: 'cors' });
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const responseData = await response.json();
    console.log(responseData);
    console.log(`name: ${responseData.location.name}`);
    console.log(`temperature: ${responseData.current.temp_c}`);
    console.log(`weather condition: ${responseData.current.condition.text}`);
    console.log(`feelslike: ${responseData.current.feelslike_c}`);
    return responseData;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchCurrentWeather;
