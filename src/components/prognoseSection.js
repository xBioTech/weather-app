import cloudyRainyIcon from '../assets/cloudyrainy.png';

function createWeatherPrognoseSection() {
  const contentDiv = document.getElementById('content');

  const weatherPrognoseDiv = document.createElement('div');
  weatherPrognoseDiv.classList.add('weather-prognose');

  const day1PrognoseDiv = document.createElement('div');
  day1PrognoseDiv.classList.add('day-prognose');

  const day1Paragraph = document.createElement('p');
  day1Paragraph.textContent = 'Day 1';

  day1PrognoseDiv.appendChild(day1Paragraph);

  const weatherImage = new Image();
  weatherImage.src = cloudyRainyIcon;
  weatherImage.classList.add('weather-condition-image');

  day1PrognoseDiv.appendChild(weatherImage);

  const day1MaxTemp = document.createElement('p');
  day1MaxTemp.textContent = '12°C';

  day1PrognoseDiv.appendChild(day1MaxTemp);

  const day1MinTemp = document.createElement('p');
  day1MinTemp.textContent = '0°C';

  day1PrognoseDiv.appendChild(day1MinTemp);

  weatherPrognoseDiv.appendChild(day1PrognoseDiv);

  const day2PrognoseDiv = document.createElement('div');
  day2PrognoseDiv.classList.add('day-prognose');

  const day2Paragraph = document.createElement('p');
  day2Paragraph.textContent = 'Day 2';

  day2PrognoseDiv.appendChild(day2Paragraph);

  const weatherImage2 = new Image();
  weatherImage2.src = cloudyRainyIcon;
  weatherImage2.classList.add('weather-condition-image');

  day2PrognoseDiv.appendChild(weatherImage2);

  const day2MaxTemp = document.createElement('p');
  day2MaxTemp.textContent = '10°C';

  day2PrognoseDiv.appendChild(day2MaxTemp);

  const day2MinTemp = document.createElement('p');
  day2MinTemp.textContent = '1°C';

  day2PrognoseDiv.appendChild(day2MinTemp);

  weatherPrognoseDiv.appendChild(day2PrognoseDiv);

  const day3PrognoseDiv = document.createElement('div');
  day3PrognoseDiv.classList.add('day-prognose');

  const day3Paragraph = document.createElement('p');
  day3Paragraph.textContent = 'Day 3';

  day3PrognoseDiv.appendChild(day3Paragraph);

  const weatherImage3 = new Image();
  weatherImage3.src = cloudyRainyIcon;
  weatherImage3.classList.add('weather-condition-image');

  day3PrognoseDiv.appendChild(weatherImage3);

  const day3MaxTemp = document.createElement('p');
  day3MaxTemp.textContent = '10°C';

  day3PrognoseDiv.appendChild(day3MaxTemp);

  const day3MinTemp = document.createElement('p');
  day3MinTemp.textContent = '2°C';

  day3PrognoseDiv.appendChild(day3MinTemp);

  weatherPrognoseDiv.appendChild(day3PrognoseDiv);

  contentDiv.appendChild(weatherPrognoseDiv);
}

export default createWeatherPrognoseSection;
