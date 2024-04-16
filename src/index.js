import './style.scss';
import createMainSection from './components/mainSection';
import createWeatherPrognoseSection from './components/prognoseSection';
import createTodaysHighlightsSection from './components/highlightSection';
import fetchCurrentWeather from './functions/fetchCurrentWeather';
import fetchWeatherForecast from './functions/fetchWeatherForecast';
import searchBar from './components/searchBar';
import clearContent from './functions/clearContent';
import getDays from './functions/getDay';

searchBar();
const submitBtn = document.querySelector('.search-icon');
const inputField = document.querySelector('.searchbar');

async function runCode(searchbarValue) {
  const apiDataCurrent = await fetchCurrentWeather(searchbarValue);
  const apiDataForecast = await fetchWeatherForecast(searchbarValue);
  const weekDays = apiDataForecast.forecast.forecastday.map((day) => getDays(day.date));
  console.log(weekDays);
  createMainSection(apiDataCurrent, apiDataForecast);
  createWeatherPrognoseSection(apiDataForecast, weekDays);
  createTodaysHighlightsSection(apiDataForecast);
}

runCode('london');

submitBtn.addEventListener('click', () => {
  const inputFieldValue = inputField.value;
  clearContent();
  runCode(inputFieldValue);
});
