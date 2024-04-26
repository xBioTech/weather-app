import mapMarkerIcon from '../assets/map-marker.svg';

function createMainSection(apiData, forecastApiData) {
  const contentDiv = document.getElementById('content');
  const leftSideDiv = document.getElementById('left-side');

  const weatherLocationDiv = document.createElement('div');
  weatherLocationDiv.classList.add('weather-location-div');

  const weatherStatusDiv = document.createElement('div');
  weatherStatusDiv.classList.add('weather-status-div');

  const mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('main-content-div');

  const myLocationTitle = document.createElement('h1');
  myLocationTitle.classList.add('my-location');
  myLocationTitle.textContent = 'My Location';

  weatherLocationDiv.appendChild(myLocationTitle);

  const weatherImage = new Image();
  weatherImage.src = apiData.current.condition.icon;
  weatherImage.classList.add('weather-condition-image');

  weatherLocationDiv.appendChild(weatherImage);

  const locationDiv = document.createElement('div');
  locationDiv.classList.add('location-div');

  const mapMarkerImage = new Image();
  mapMarkerImage.src = mapMarkerIcon;
  mapMarkerImage.classList.add('map-marker');

  locationDiv.appendChild(mapMarkerImage);

  const locationParagraph = document.createElement('p');
  locationParagraph.classList.add('location');
  locationParagraph.textContent = apiData.location.name;

  locationDiv.appendChild(locationParagraph);

  weatherLocationDiv.appendChild(locationDiv);
  mainContentDiv.appendChild(weatherLocationDiv);

  const degreeParagraph = document.createElement('p');
  degreeParagraph.classList.add('degrees');
  degreeParagraph.textContent = `${apiData.current.temp_c}°C`;

  mainContentDiv.appendChild(degreeParagraph);

  const weatherConditionsParagraph = document.createElement('p');
  weatherConditionsParagraph.classList.add('weather-conditions');
  weatherConditionsParagraph.textContent = apiData.current.condition.text;

  weatherStatusDiv.appendChild(weatherConditionsParagraph);

  const minMaxDiv = document.createElement('div');
  minMaxDiv.classList.add('min-max-div');

  const minimumParagraph = document.createElement('p');
  minimumParagraph.classList.add('min-degrees');
  minimumParagraph.textContent = `Min: ${forecastApiData.forecast.forecastday[0].day.mintemp_c}°C`;

  minMaxDiv.appendChild(minimumParagraph);

  const maximumParagraph = document.createElement('p');
  maximumParagraph.classList.add('max-degrees');
  maximumParagraph.textContent = `Max: ${forecastApiData.forecast.forecastday[0].day.maxtemp_c}°C`;

  minMaxDiv.appendChild(maximumParagraph);

  weatherStatusDiv.appendChild(minMaxDiv);
  mainContentDiv.appendChild(weatherStatusDiv);

  leftSideDiv.appendChild(mainContentDiv);
  contentDiv.appendChild(leftSideDiv);
}

export default createMainSection;
