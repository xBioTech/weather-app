function createTodaysHighlightsSection(apiData) {
  const contentDiv = document.getElementById("content");
  const rightSideDiv = document.getElementById("right-side");

  const todaysHighlightsDiv = document.createElement("div");
  todaysHighlightsDiv.classList.add("todays-highlights");

  const gridDiv = document.createElement("div");
  gridDiv.classList.add("highlights-grid");

  const headline = document.createElement("h1");
  headline.classList.add("highlights-headline");
  headline.textContent = "Todays Highlights";

  todaysHighlightsDiv.appendChild(headline);

  const windDiv = document.createElement("div");
  windDiv.classList.add("wind");

  const windHeadline = document.createElement("p");
  windHeadline.textContent = "Wind Status in km/h";

  windDiv.appendChild(windHeadline);

  const windParagraph = document.createElement("h1");
  windParagraph.textContent = `${apiData.forecast.forecastday[0].day.maxwind_kph} km/h`;

  windDiv.appendChild(windParagraph);

  gridDiv.appendChild(windDiv);

  const humidityDiv = document.createElement("div");
  humidityDiv.classList.add("humidity");

  const humidityHeadline = document.createElement("p");
  humidityHeadline.textContent = "Humidity in %";

  humidityDiv.appendChild(humidityHeadline);

  const humidityParagraph = document.createElement("h1");
  humidityParagraph.textContent = `${apiData.forecast.forecastday[0].day.avghumidity} %`;

  humidityDiv.appendChild(humidityParagraph);

  gridDiv.appendChild(humidityDiv);

  const feelsLikeDiv = document.createElement("div");
  feelsLikeDiv.classList.add("feels-like");

  const feelsLikeHeadline = document.createElement("p");
  feelsLikeHeadline.textContent = "Currently Feels Like";

  feelsLikeDiv.appendChild(feelsLikeHeadline);

  const feelsLikeParagraph = document.createElement("h1");
  feelsLikeParagraph.textContent = `${apiData.current.feelslike_c} °C`;

  feelsLikeDiv.appendChild(feelsLikeParagraph);

  gridDiv.appendChild(feelsLikeDiv);

  const precipitationDiv = document.createElement("div");
  precipitationDiv.classList.add("precipitation");

  const precipitationHeadline = document.createElement("p");
  precipitationHeadline.textContent = "Chance of Rain in %";

  precipitationDiv.appendChild(precipitationHeadline);

  const precipitationParagraph = document.createElement("h1");
  precipitationParagraph.textContent = `${apiData.forecast.forecastday[0].day.daily_chance_of_rain} %`;

  precipitationDiv.appendChild(precipitationParagraph);

  gridDiv.appendChild(precipitationDiv);

  const sunriseDiv = document.createElement("div");
  sunriseDiv.classList.add("sunrise");

  const sunriseHeadline = document.createElement("p");
  sunriseHeadline.textContent = "Sunrise";

  sunriseDiv.appendChild(sunriseHeadline);

  const sunriseParagraph = document.createElement("h1");
  sunriseParagraph.textContent = apiData.forecast.forecastday[0].astro.sunrise;

  sunriseDiv.appendChild(sunriseParagraph);

  gridDiv.appendChild(sunriseDiv);

  const sunsetDiv = document.createElement("div");
  sunsetDiv.classList.add("sunset");

  const sunsetHeadline = document.createElement("p");
  sunsetHeadline.textContent = "Sunset";

  sunsetDiv.appendChild(sunsetHeadline);

  const sunsetParagraph = document.createElement("h1");
  sunsetParagraph.textContent = apiData.forecast.forecastday[0].astro.sunset;

  sunsetDiv.appendChild(sunsetParagraph);

  gridDiv.appendChild(sunsetDiv);

  const moonIlluminationDiv = document.createElement("div");
  moonIlluminationDiv.classList.add("moon-illumination");

  const moonIlluminationHeadline = document.createElement("p");
  moonIlluminationHeadline.textContent = "Moon Illumination in %";

  moonIlluminationDiv.appendChild(moonIlluminationHeadline);

  const moonIlluminationParagraph = document.createElement("h1");
  moonIlluminationParagraph.textContent = `${apiData.forecast.forecastday[0].astro.moon_illumination} %`;

  moonIlluminationDiv.appendChild(moonIlluminationParagraph);

  gridDiv.appendChild(moonIlluminationDiv);

  todaysHighlightsDiv.appendChild(gridDiv);

  rightSideDiv.appendChild(todaysHighlightsDiv);
  contentDiv.appendChild(rightSideDiv);
}

export default createTodaysHighlightsSection;
