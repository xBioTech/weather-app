import cloudyRainyIcon from '../assets/cloudyrainy.png';
import mapMarkerIcon from '../assets/map-marker.svg';

function createMainSection() {
  const contentDiv = document.getElementById('content');

  const mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('main-content-div');

  const myLocationTitle = document.createElement('h1');
  myLocationTitle.classList.add('my-location');
  myLocationTitle.textContent = 'My Location';

  mainContentDiv.appendChild(myLocationTitle);

  const weatherImage = new Image();
  weatherImage.src = cloudyRainyIcon;
  weatherImage.classList.add('weather-condition-image');

  mainContentDiv.appendChild(weatherImage);

  const locationDiv = document.createElement('div');
  locationDiv.classList.add('location-div');

  const mapMarkerImage = new Image();
  mapMarkerImage.src = mapMarkerIcon;
  mapMarkerImage.classList.add('map-marker');

  locationDiv.appendChild(mapMarkerImage);

  const locationParagraph = document.createElement('p');
  locationParagraph.classList.add('location');
  locationParagraph.textContent = 'Karlsruhe';

  locationDiv.appendChild(locationParagraph);

  mainContentDiv.appendChild(locationDiv);

  const degreeParagraph = document.createElement('p');
  degreeParagraph.classList.add('degrees');
  degreeParagraph.textContent = '12°C';

  mainContentDiv.appendChild(degreeParagraph);

  const weatherConditionsParagraph = document.createElement('p');
  weatherConditionsParagraph.classList.add('weather-conditions');
  weatherConditionsParagraph.textContent = 'Sunny';

  mainContentDiv.appendChild(weatherConditionsParagraph);

  const minMaxDiv = document.createElement('div');
  minMaxDiv.classList.add('min-max-div');

  const minimumParagraph = document.createElement('p');
  minimumParagraph.classList.add('min-degrees');
  minimumParagraph.textContent = 'min temp: 0°C';

  minMaxDiv.appendChild(minimumParagraph);

  const maximumParagraph = document.createElement('p');
  maximumParagraph.classList.add('max-degrees');
  maximumParagraph.textContent = 'max temp: 12°C';

  minMaxDiv.appendChild(maximumParagraph);

  mainContentDiv.appendChild(minMaxDiv);

  contentDiv.appendChild(mainContentDiv);
}

export default createMainSection;
