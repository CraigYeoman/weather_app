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
    console.log(dataWeather.main.temp);
  } catch (error) {
    console.log(error);
  }
}

function init() {
  cityButton.addEventListener("click", () => {
    const location = getCity();
    getWeather(location);
  });
}

init();
