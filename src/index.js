const cityButton = document.getElementById("button");



function getCity() {
  const city = document.getElementById("city");
  const location = city.value;
  return location;
}

async function getWeather(location) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=##&units=imperial`,
      { mode: "cors" }
    );
    const dataWeather = await response.json();
    return dataWeather
  } catch (error) {
    console.log(error);
  }
}

function displayData(dataWeather) {
const weatherDescription = document.querySelector("[data-description]");
const weatherTemp = document.querySelector("[data-temp]");
const weatherTempFeel = document.querySelector("[data-feels-like");
const weatherMin = document.querySelector("[data-min]");
const weatherMax = document.querySelector("[data-max]");
const weatherPressure = document.querySelector("[data-pressure]");
const weatherHumidity = document.querySelector("[data-humidity]");
const weatherWind = document.querySelector("[data-wind]");
const weatherVisibility = document.querySelector("[data-visibilty]");

weatherDescription.textContent = dataWeather.weather.description;
weatherTemp.textContent = dataWeather.main.temp
weatherTempFeel.textContent = dataWeather.main.feels_like;
weatherMin.textContent = dataWeather.main.temp_min;
weatherMax.textContent = dataWeather.main.temp_max;
weatherPressure.textContent = dataWeather.main.pressure;
weatherHumidity.textContent = dataWeather.main.humidity;
weatherWind.textContent = dataWeather.wind.speed;
weatherVisibility.textContent = dataWeather.visibilty;
}

function init() {
  cityButton.addEventListener("click", () => {
    const location = getCity();
    const dataWeather = getWeather(location);
    displayData(dataWeather);
  });
}

init();
