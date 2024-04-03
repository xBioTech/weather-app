async function fetchWeatherForecast() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5ef2cc7df56f4d9494d203100242002&q=london&days=3', { mode: 'cors' });
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const responseData = await response.json();
    console.log(responseData);
    // DAY 1
    console.log(`max temp today: ${responseData.forecast.forecastday[0].day.maxtemp_c}`);
    console.log(`min temp today: ${responseData.forecast.forecastday[0].day.mintemp_c}`);
    console.log(`average humidity today:${responseData.forecast.forecastday[0].day.avghumidity}`);
    console.log(`average temperature today:${responseData.forecast.forecastday[0].day.avgtemp_c}`);
    console.log(`chance of rain today:${responseData.forecast.forecastday[0].day.daily_chance_of_rain}`);
    console.log(`wind status today:${responseData.forecast.forecastday[0].day.maxwind_kph}`);

    // DAY 2
    console.log(`min temp second Day:${responseData.forecast.forecastday[1].day.mintemp_c}`);
    console.log(`max temp second Day:${responseData.forecast.forecastday[1].day.maxtemp_c}`);
    console.log(`weather condition second Day:${responseData.forecast.forecastday[1].day.condition.text}`);
    // DAY 3
    console.log(`min temp third Day:${responseData.forecast.forecastday[2].day.mintemp_c}`);
    console.log(`max temp third Day:${responseData.forecast.forecastday[2].day.maxtemp_c}`);
    console.log(`weather condition third Day:${responseData.forecast.forecastday[2].day.condition.text}`);
    return responseData;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchWeatherForecast;
