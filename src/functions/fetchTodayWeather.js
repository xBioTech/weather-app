async function fetchTodayWeather() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=5ef2cc7df56f4d9494d203100242002&q=london');
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const responseData = await response.json();
    console.log(responseData);
    // console.log(responseData.current.condition.text);
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchTodayWeather;
