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

  const day4PrognoseDiv = document.createElement('div');
  day4PrognoseDiv.classList.add('day-prognose');

  const day4Paragraph = document.createElement('p');
  day4Paragraph.textContent = 'Day 4';

  day4PrognoseDiv.appendChild(day4Paragraph);

  const weatherImage4 = new Image();
  weatherImage4.src = cloudyRainyIcon;
  weatherImage4.classList.add('weather-condition-image');

  day4PrognoseDiv.appendChild(weatherImage4);

  const day4MaxTemp = document.createElement('p');
  day4MaxTemp.textContent = '10°C';

  day4PrognoseDiv.appendChild(day4MaxTemp);

  const day4MinTemp = document.createElement('p');
  day4MinTemp.textContent = '1°C';

  day4PrognoseDiv.appendChild(day4MinTemp);

  weatherPrognoseDiv.appendChild(day4PrognoseDiv);

  const day5PrognoseDiv = document.createElement('div');
  day5PrognoseDiv.classList.add('day-prognose');

  const day5Paragraph = document.createElement('p');
  day5Paragraph.textContent = 'Day 5';

  day5PrognoseDiv.appendChild(day5Paragraph);

  const weatherImage5 = new Image();
  weatherImage5.src = cloudyRainyIcon;
  weatherImage5.classList.add('weather-condition-image');

  day5PrognoseDiv.appendChild(weatherImage5);

  const day5MaxTemp = document.createElement('p');
  day5MaxTemp.textContent = '10°C';

  day5PrognoseDiv.appendChild(day5MaxTemp);

  const day5MinTemp = document.createElement('p');
  day5MinTemp.textContent = '1°C';

  day5PrognoseDiv.appendChild(day5MinTemp);

  weatherPrognoseDiv.appendChild(day5PrognoseDiv);

  const day6PrognoseDiv = document.createElement('div');
  day6PrognoseDiv.classList.add('day-prognose');

  const day6Paragraph = document.createElement('p');
  day6Paragraph.textContent = 'Day 6';

  day6PrognoseDiv.appendChild(day6Paragraph);

  const weatherImage6 = new Image();
  weatherImage6.src = cloudyRainyIcon;
  weatherImage6.classList.add('weather-condition-image');

  day6PrognoseDiv.appendChild(weatherImage6);

  const day6MaxTemp = document.createElement('p');
  day6MaxTemp.textContent = '10°C';

  day6PrognoseDiv.appendChild(day6MaxTemp);

  const day6MinTemp = document.createElement('p');
  day6MinTemp.textContent = '1°C';

  day6PrognoseDiv.appendChild(day6MinTemp);

  weatherPrognoseDiv.appendChild(day6PrognoseDiv);

  const day7PrognoseDiv = document.createElement('div');
  day7PrognoseDiv.classList.add('day-prognose');

  const day7Paragraph = document.createElement('p');
  day7Paragraph.textContent = 'Day 7';

  day7PrognoseDiv.appendChild(day7Paragraph);

  const weatherImage7 = new Image();
  weatherImage7.src = cloudyRainyIcon;
  weatherImage7.classList.add('weather-condition-image');

  day7PrognoseDiv.appendChild(weatherImage7);

  const day7MaxTemp = document.createElement('p');
  day7MaxTemp.textContent = '10°C';

  day7PrognoseDiv.appendChild(day7MaxTemp);

  const day7MinTemp = document.createElement('p');
  day7MinTemp.textContent = '1°C';

  day7PrognoseDiv.appendChild(day7MinTemp);

  weatherPrognoseDiv.appendChild(day7PrognoseDiv);

  contentDiv.appendChild(weatherPrognoseDiv);
}

export default createWeatherPrognoseSection;
