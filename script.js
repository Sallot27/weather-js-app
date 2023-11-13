/*function getWeather() {
   const latitude = document.getElementById("latitude").value;
   const longitude = document.getElementById("longitude").value;
   const weatherIcon = document.getElementById("weather-icon");
   const weatherDescription = document.getElementById("weather-description");
   const weatherTemperature = document.getElementById("weather-temperature");

   // Hard-coded weather values
   const icon = "☀️";
   const description = "Sunny";
   const temperature = "25°C";

   weatherIcon.textContent = icon;
   weatherDescription.textContent = description;
   weatherTemperature.textContent = temperature;
*/
function getWeatherXMLHTTPRequest() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const weatherIcon = document.getElementById("weather-icon");
    const weatherDescription = document.getElementById("weather-description");
    const weatherTemperature = document.getElementById("weather-temperature");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.weatherapi.com/v1/current.json?key=ab710fb2710b406b950132557231311&q=${latitude},${longitude}`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const icon = response.current.condition.icon;
            const description = response.current.condition.text;
            const temperature = response.current.temp_c + "°C";

            const weatherIconImg = document.getElementById("weather-icon-img");
            weatherIconImg.setAttribute("src", "https:" + icon);
            weatherDescription.textContent = description;
            weatherTemperature.textContent = temperature;
        }
    };
    xhr.send();
}

function getWeatherFetchPromises() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const weatherIcon = document.getElementById("weather-icon");
    const weatherDescription = document.getElementById("weather-description");
    const weatherTemperature = document.getElementById("weather-temperature");

    fetch(`https://api.weatherapi.com/v1/current.json?key=ab710fb2710b406b950132557231311&q=${latitude},${longitude}`)
        .then((response) => response.json())
        .then((data) => {
            const icon = data.current.condition.icon;
            const description = data.current.condition.text;
            const temperature = data.current.temp_c + "°C";

            const weatherIconImg = document.getElementById("weather-icon-img");
            weatherIconImg.setAttribute("src", "https:" + icon);
            weatherDescription.textContent = description;
            weatherTemperature.textContent = temperature;
        })
        .catch((error) => console.log(error));
}

async function getWeatherFetchAsyncAwait() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const weatherIcon = document.getElementById("weather-icon");
    const weatherDescription = document.getElementById("weather-description");
    const weatherTemperature = document.getElementById("weather-temperature");

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ab710fb2710b406b950132557231311&q=${latitude},${longitude}`);
        const data = await response.json();

        const icon = data.current.condition.icon;
        const description = data.current.condition.text;
        const temperature = data.current.temp_c + "°C";

        const weatherIconImg = document.getElementById("weather-icon-img");
        weatherIconImg.setAttribute("src", "https:" + icon);
        weatherDescription.textContent = description;
        weatherTemperature.textContent = temperature;
    } catch (error) {
        console.log(error);
    }
}