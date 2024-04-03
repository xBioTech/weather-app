import './style.scss';
import createMainSection from './components/mainSection';
import createWeatherPrognoseSection from './components/prognoseSection';
import createTodaysHighlightsSection from './components/highlightSection';
import fetchCurrentWeather from './functions/fetchCurrentWeather';
import fetchWeatherForecast from './functions/fetchWeatherForecast';

async function runCode() {
  const apiDataCurrent = await fetchCurrentWeather();
  const apiDataForecast = await fetchWeatherForecast();
  createMainSection(apiDataCurrent, apiDataForecast);
  createWeatherPrognoseSection(apiDataForecast);
  createTodaysHighlightsSection();
}

runCode();
