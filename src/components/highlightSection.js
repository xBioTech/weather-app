function createTodaysHighlightsSection() {
  const contentDiv = document.getElementById('content');

  const todaysHighlightsDiv = document.createElement('div');
  todaysHighlightsDiv.classList.add('todays-highlights');

  contentDiv.appendChild(todaysHighlightsDiv);
}

export default createTodaysHighlightsSection;
