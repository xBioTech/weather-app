import './style.scss';
import createMainSection from './components/mainSection';
import createWeatherPrognoseSection from './components/prognoseSection';
import createTodaysHighlightsSection from './components/highlightSection';
import fetchTodayWeather from './functions/fetchTodayWeather';
import fetchWeatherForecast from './functions/fetchWeatherForecast';

createMainSection();
createWeatherPrognoseSection();
createTodaysHighlightsSection();
fetchTodayWeather();
fetchWeatherForecast();
