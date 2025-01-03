const apiKey = "2bf2132293923583802221ce46ef679c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const weatherIcon = document.querySelector(".weather-icon");

let objSrc = {
  Clouds: "images/clouds.png",
  Clear: "images/clear.png",
  Rain: "images/rain.png",
  Snow: "images/snow.png",
  Drizzle: "images/drizzle.png",
  Windy: "images/wind.png",
  Mist: "images/mist.png",
};

const weather = document.getElementById("weather");
console.log(weather);

const error = document.getElementById("error");
async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  if (response.status === 404) {
    alert("City not found");
    error.style.display = "block";
    weather.style.display = "none";
    return;
  } else {
    error.style.display = "none";
    let data = await response.json();
    console.log(data);

    const temperature = document.getElementById("temp");
    const city = document.getElementById("city");
    city.innerHTML = data.name;
    temperature.innerHTML = data.main.temp + "°C";
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");
    console.log(data.main.humidity);

    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "m/s";
    console.log(data.weather[0].main);

    weatherIcon.src = objSrc[data.weather[0].main];
    weather.style.display = "block";
  }
}

// checkWeather("waidhan");
const button = document.getElementById("search-button");

button.addEventListener("click", () => {
  const searchbar = document.getElementById("search-bar");
  const cityName = searchbar.value;
  console.log(cityName);

  if (cityName === "") {
    alert("Please enter city name");
  } else {
    checkWeather(cityName);

    searchbar.value = "";
  }
});
