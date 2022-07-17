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
