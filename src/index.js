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
const weatherPressure = document.querySelector("[data-pressure]");
const weatherHumidity = document.querySelector("[data-humidity]");
const weatherWind = document.querySelector("[data-wind]");

weatherDescription.textContent = dataWeather.weather[0].description;
weatherTemp.textContent = `${dataWeather.main.temp} F°`
weatherTempFeel.textContent = `${dataWeather.main.feels_like} F°`;
weatherPressure.textContent = `${dataWeather.main.pressure} hPA`;
weatherHumidity.textContent = dataWeather.main.humidity;
weatherWind.textContent = dataWeather.wind.speed;
}

function init() {
  cityButton.addEventListener("click", async () => {
    const location = getCity();
    const dataWeather = await getWeather(location);
    displayData(dataWeather);
  });
}

init();
