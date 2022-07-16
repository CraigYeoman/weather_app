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
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d24c0168a5997c2a5fcf4b4c6671cd55&units=imperial`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsRUFBRSxTQUFTLEVBQUU7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRCxpQ0FBaUMsNkJBQTZCO0FBQzlELGlDQUFpQywyQkFBMkI7QUFDNUQsaUNBQWlDLDBCQUEwQjtBQUMzRCw2QkFBNkIsd0JBQXdCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKTtcblxuZnVuY3Rpb24gZ2V0Q2l0eSgpIHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKTtcbiAgY29uc3QgbG9jYXRpb24gPSBjaXR5LnZhbHVlO1xuICByZXR1cm4gbG9jYXRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD1kMjRjMDE2OGE1OTk3YzJhNWZjZjRiNGM2NjcxY2Q1NSZ1bml0cz1pbXBlcmlhbGAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGFXZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhV2VhdGhlclxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYXBpdGlsaXplKGluZm8pe1xuICByZXR1cm4gaW5mby5yZXBsYWNlKC8oXlxcd3sxfSl8KFxccytcXHd7MX0pL2csIGxldHRlciA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEYXRhKGRhdGFXZWF0aGVyKSB7XG5jb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVzY3JpcHRpb25dXCIpO1xuY29uc3Qgd2VhdGhlclRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGVtcF1cIik7XG5jb25zdCB3ZWF0aGVyVGVtcEZlZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZmVlbHMtbGlrZVwiKTtcbmNvbnN0IHdlYXRoZXJQcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmVzc3VyZV1cIik7XG5jb25zdCB3ZWF0aGVySHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaHVtaWRpdHldXCIpO1xuY29uc3Qgd2VhdGhlcldpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtd2luZF1cIik7XG5jb25zdCB3ZWF0aGVyTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbG9jYXRpb25dXCIpXG5cbndlYXRoZXJMb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGFXZWF0aGVyLm5hbWV9YDtcbndlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNhcGl0aWxpemUoZGF0YVdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG53ZWF0aGVyVGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGFXZWF0aGVyLm1haW4udGVtcH0gRsKwYFxud2VhdGhlclRlbXBGZWVsLnRleHRDb250ZW50ID0gYCR7ZGF0YVdlYXRoZXIubWFpbi5mZWVsc19saWtlfSBGwrBgO1xud2VhdGhlclByZXNzdXJlLnRleHRDb250ZW50ID0gYCR7ZGF0YVdlYXRoZXIubWFpbi5wcmVzc3VyZX0gaFBBYDtcbndlYXRoZXJIdW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGFXZWF0aGVyLm1haW4uaHVtaWRpdHl9JWA7XG53ZWF0aGVyV2luZC50ZXh0Q29udGVudCA9IGAke2RhdGFXZWF0aGVyLndpbmQuc3BlZWR9IG1waGA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWQoKSB7XG4gIGNvbnN0IGRhdGFXZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlcignSm9wbGluJyk7XG4gIGRpc3BsYXlEYXRhKGRhdGFXZWF0aGVyKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgbG9hZCgpO1xuICBjaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBnZXRDaXR5KCk7XG4gICAgY29uc3QgZGF0YVdlYXRoZXIgPSBhd2FpdCBnZXRXZWF0aGVyKGxvY2F0aW9uKTtcbiAgICBkaXNwbGF5RGF0YShkYXRhV2VhdGhlcik7XG4gIH0pO1xufVxuXG5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=