function getDays(apiData) {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(apiData);
  return weekDays[date.getDay()];
}

export default getDays;
