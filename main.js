/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const cityButton = document.getElementById("button");

function getCity() {
  const city = document.getElementById("city");
  const location = city.value;
  return location;
}

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d24c0168a5997c2a5fcf4b4c6671cd55&units=imperial`,
      { mode: "cors" }
    );
    const dataWeather = await response.json();
    return dataWeather
  } catch (error) {
    console.log(error);
  }
}

function capitilize(info){
  return info.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

function displayData(dataWeather) {
const weatherDescription = document.querySelector("[data-description]");
const weatherTemp = document.querySelector("[data-temp]");
const weatherTempFeel = document.querySelector("[data-feels-like");
const weatherPressure = document.querySelector("[data-pressure]");
const weatherHumidity = document.querySelector("[data-humidity]");
const weatherWind = document.querySelector("[data-wind]");
const weatherLocation = document.querySelector("[data-location]")

weatherLocation.textContent = `${dataWeather.name}`;
weatherDescription.textContent = capitilize(dataWeather.weather[0].description);
weatherTemp.textContent = `${dataWeather.main.temp} F°`
weatherTempFeel.textContent = `${dataWeather.main.feels_like} F°`;
weatherPressure.textContent = `${dataWeather.main.pressure} hPA`;
weatherHumidity.textContent = `${dataWeather.main.humidity}%`;
weatherWind.textContent = `${dataWeather.wind.speed} mph`;
}

async function load() {
  const dataWeather = await getWeather('Joplin');
  displayData(dataWeather);
}

function init() {
  load();
  cityButton.addEventListener("click", async () => {
    const location = getCity();
    const dataWeather = await getWeather(location);
    displayData(dataWeather);
  });
}

init();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFNBQVM7QUFDcEUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsRUFBRSxTQUFTLEVBQUU7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRCxpQ0FBaUMsNkJBQTZCO0FBQzlELGlDQUFpQywyQkFBMkI7QUFDNUQsaUNBQWlDLDBCQUEwQjtBQUMzRCw2QkFBNkIsd0JBQXdCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKTtcblxuZnVuY3Rpb24gZ2V0Q2l0eSgpIHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKTtcbiAgY29uc3QgbG9jYXRpb24gPSBjaXR5LnZhbHVlO1xuICByZXR1cm4gbG9jYXRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9ZDI0YzAxNjhhNTk5N2MyYTVmY2Y0YjRjNjY3MWNkNTUmdW5pdHM9aW1wZXJpYWxgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhV2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YVdlYXRoZXJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FwaXRpbGl6ZShpbmZvKXtcbiAgcmV0dXJuIGluZm8ucmVwbGFjZSgvKF5cXHd7MX0pfChcXHMrXFx3ezF9KS9nLCBsZXR0ZXIgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhV2VhdGhlcikge1xuY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlc2NyaXB0aW9uXVwiKTtcbmNvbnN0IHdlYXRoZXJUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRlbXBdXCIpO1xuY29uc3Qgd2VhdGhlclRlbXBGZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWZlZWxzLWxpa2VcIik7XG5jb25zdCB3ZWF0aGVyUHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJlc3N1cmVdXCIpO1xuY29uc3Qgd2VhdGhlckh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWh1bWlkaXR5XVwiKTtcbmNvbnN0IHdlYXRoZXJXaW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXdpbmRdXCIpO1xuY29uc3Qgd2VhdGhlckxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxvY2F0aW9uXVwiKVxuXG53ZWF0aGVyTG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhV2VhdGhlci5uYW1lfWA7XG53ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjYXBpdGlsaXplKGRhdGFXZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xud2VhdGhlclRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhV2VhdGhlci5tYWluLnRlbXB9IEbCsGBcbndlYXRoZXJUZW1wRmVlbC50ZXh0Q29udGVudCA9IGAke2RhdGFXZWF0aGVyLm1haW4uZmVlbHNfbGlrZX0gRsKwYDtcbndlYXRoZXJQcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke2RhdGFXZWF0aGVyLm1haW4ucHJlc3N1cmV9IGhQQWA7XG53ZWF0aGVySHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhV2VhdGhlci5tYWluLmh1bWlkaXR5fSVgO1xud2VhdGhlcldpbmQudGV4dENvbnRlbnQgPSBgJHtkYXRhV2VhdGhlci53aW5kLnNwZWVkfSBtcGhgO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkKCkge1xuICBjb25zdCBkYXRhV2VhdGhlciA9IGF3YWl0IGdldFdlYXRoZXIoJ0pvcGxpbicpO1xuICBkaXNwbGF5RGF0YShkYXRhV2VhdGhlcik7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGxvYWQoKTtcbiAgY2l0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZ2V0Q2l0eSgpO1xuICAgIGNvbnN0IGRhdGFXZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlcihsb2NhdGlvbik7XG4gICAgZGlzcGxheURhdGEoZGF0YVdlYXRoZXIpO1xuICB9KTtcbn1cblxuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9