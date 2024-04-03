function createTodaysHighlightsSection() {
  const contentDiv = document.getElementById('content');

  const todaysHighlightsDiv = document.createElement('div');
  todaysHighlightsDiv.classList.add('todays-highlights');

  const headline = document.createElement('h1');
  headline.textContent = 'Todays Highlights';

  todaysHighlightsDiv.appendChild(headline);

  const windDiv = document.createElement('div');
  windDiv.classList.add('wind');

  const windHeadline = document.createElement('p');
  windHeadline.textContent = 'Wind Status';

  windDiv.appendChild(windHeadline);

  const windParagraph = document.createElement('h1');
  windParagraph.textContent = '10 kmh';

  windDiv.appendChild(windParagraph);

  todaysHighlightsDiv.appendChild(windDiv);

  const humidityDiv = document.createElement('div');
  humidityDiv.classList.add('humidity');

  const humidityHeadline = document.createElement('p');
  humidityHeadline.textContent = 'Humidity in %';

  humidityDiv.appendChild(humidityHeadline);

  const humidityParagraph = document.createElement('h1');
  humidityParagraph.textContent = '80%';

  humidityDiv.appendChild(humidityParagraph);

  todaysHighlightsDiv.appendChild(humidityDiv);

  const feelsLikeDiv = document.createElement('div');
  feelsLikeDiv.classList.add('feels-like');

  const feelsLikeHeadline = document.createElement('p');
  feelsLikeHeadline.textContent = 'Feels Like';

  feelsLikeDiv.appendChild(feelsLikeHeadline);

  const feelsLikeParagraph = document.createElement('h1');
  feelsLikeParagraph.textContent = '8°C';

  feelsLikeDiv.appendChild(feelsLikeParagraph);

  todaysHighlightsDiv.appendChild(feelsLikeDiv);

  const precipitationDiv = document.createElement('div');
  precipitationDiv.classList.add('precipitation');

  const precipitationHeadline = document.createElement('p');
  precipitationHeadline.textContent = 'Chance of Rain in %';

  precipitationDiv.appendChild(precipitationHeadline);

  const precipitationParagraph = document.createElement('h1');
  precipitationParagraph.textContent = '45%';

  precipitationDiv.appendChild(precipitationParagraph);

  todaysHighlightsDiv.appendChild(precipitationDiv);

  contentDiv.appendChild(todaysHighlightsDiv);
}

export default createTodaysHighlightsSection;
