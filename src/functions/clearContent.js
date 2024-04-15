function clearContent() {
  const mainContentDiv = document.querySelector('.main-content-div');
  mainContentDiv.remove();

  const weatherPrognoseDiv = document.querySelector('.weather-prognose');
  weatherPrognoseDiv.remove();

  const todaysHighlightsDiv = document.querySelector('.todays-highlights');
  todaysHighlightsDiv.remove();
}

export default clearContent;
