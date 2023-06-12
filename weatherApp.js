/*
    Todo:
    ! Error checking for wrong spelling name e.g "stvanger" etc
*/

"use strict"

// Define celcius calculation, apiKey's, cityName and apiURL variables.
const kelvinToCelcius = (kelvin) => kelvin - 273.15;
// Obfuscated API Keys for OpenWeatherMap and Unsplash
let _0x9f16 = ["\x31\x36\x39\x39\x36\x33\x31\x42\x64\x42\x50\x69\x6F", "\x38\x32\x39\x36\x36\x37\x32\x4B\x67\x4E\x66\x41\x51", "\x31\x34\x36\x73\x6E\x42\x4A\x57\x44", "\x67\x47\x74\x54\x72\x63\x55\x70\x61\x4D\x59\x4B\x68\x6C\x37\x4A\x47\x31\x79\x46\x71\x4E\x65\x53\x30\x2D\x48\x49\x30\x30\x47\x74\x71\x50\x4C\x4D\x6B\x4F\x37\x2D\x71\x66\x38", "\x35\x52\x61\x73\x42\x44\x51", "\x36\x30\x38\x38\x32\x70\x76\x43\x42\x72\x57", "\x34\x33\x36\x38\x35\x37\x31\x30\x5A\x6B\x73\x68\x52\x75", "\x32\x39\x39\x39\x39\x38\x33\x74\x73\x59\x69\x50\x56", "\x39\x64\x41\x42\x47\x69\x4A", "\x32\x36\x37\x34\x32\x35\x34\x6F\x70\x77\x56\x58\x6E", "\x36\x38\x33\x30\x34\x38\x52\x61\x52\x57\x65\x46", "\x73\x68\x69\x66\x74", "\x70\x75\x73\x68", "\x33\x36\x66\x32\x65\x64\x64\x36\x32\x31\x66\x34\x32\x36\x30\x62\x33\x63\x63\x62\x61\x38\x63\x31\x34\x36\x31\x34\x64\x62\x64\x35"]; function _0x2f0b() { const _0x6e25x2 = [_0x9f16[0], _0x9f16[1], _0x9f16[2], _0x9f16[3], _0x9f16[4], _0x9f16[5], _0x9f16[6], _0x9f16[7], _0x9f16[8], _0x9f16[9], _0x9f16[10]]; _0x2f0b = function () { return _0x6e25x2 }; return _0x2f0b() } const _0x51938c = _0xd79e; (function (_0x6e25x4, _0x6e25x5) { const _0x6e25x6 = _0xd79e, _0x6e25x7 = _0x6e25x4(); while (!![]) { try { const _0x6e25x8 = parseInt(_0x6e25x6(0x1e4)) / 0x1 + -parseInt(_0x6e25x6(0x1e6)) / 0x2 * (-parseInt(_0x6e25x6(0x1e9)) / 0x3) + parseInt(_0x6e25x6(0x1ee)) / 0x4 + -parseInt(_0x6e25x6(0x1e8)) / 0x5 * (-parseInt(_0x6e25x6(0x1ed)) / 0x6) + parseInt(_0x6e25x6(0x1eb)) / 0x7 + -parseInt(_0x6e25x6(0x1e5)) / 0x8 * (-parseInt(_0x6e25x6(0x1ec)) / 0x9) + -parseInt(_0x6e25x6(0x1ea)) / 0xa; if (_0x6e25x8 === _0x6e25x5) { break } else { _0x6e25x7[_0x9f16[12]](_0x6e25x7[_0x9f16[11]]()) } } catch (_0x49dcc9) { _0x6e25x7[_0x9f16[12]](_0x6e25x7[_0x9f16[11]]()) } } }(_0x2f0b, 0xda6b6)); function _0xd79e(_0x6e25xa, _0x6e25xb) { const _0x6e25xc = _0x2f0b(); return _0xd79e = function (_0x6e25xd, _0x6e25xe) { _0x6e25xd = _0x6e25xd - 0x1e4; let _0x6e25xf = _0x6e25xc[_0x6e25xd]; return _0x6e25xf }, _0xd79e(_0x6e25xa, _0x6e25xb) } const apiKey = _0x9f16[13], unsplashApiKey = _0x51938c(0x1e7)
let cityName = document.getElementById("city-Name").value;
let cityNameInput = document.getElementById("city-Name");
const submitButton = document.getElementById("submit-btn");

// Create a function to get the weather data
const getWeatherData = (cityName, apiKey) => {
    // Define the apiURL
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    // Request the apiURL
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })

        .then(data => {
            // Extract the temperature from the api and store it in a const variable
            const temperatureInKelvin = data.main.temp;

            // Convert kelvin to celcius
            const temperatureInCelcius = kelvinToCelcius(temperatureInKelvin);

            // Get html element to display temperature
            const temperatureElement = document.getElementById("display-Weather");

            // Set temperature value to the html text element and display it as a whole number
            temperatureElement.textContent = `Temperature is: ${temperatureInCelcius.toFixed()}°C`;
        })
        .catch(error => console.log("Error:", error));
}

// Declare a constant variable to get a city image from Unsplash API
const getCityImage = (cityName, unsplashApiKey) => {
    const apiURL = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${unsplashApiKey}`;

    // Request the apiURL
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })

        .then(data => {
            // Check if the returned data has any results
            if (data.results.length > 0) {
                // Access the URL of the first image in the results
                const imageURL = data.results[0].urls.regular;
                // Change the background image to the new one and style it
                document.body.style.backgroundImage = `url(${imageURL})`;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundPosition = "center";
            }
        })
        .catch(error => console.log("Error:", error));
}

// Add event listener to submit button to display degrees in the named city
submitButton.addEventListener("click", (event) => {
    // Prevent default form submission action
    event.preventDefault();

    let userCityName = document.getElementById("city-Name").value;
    getWeatherData(userCityName, apiKey);
    getCityImage(userCityName, unsplashApiKey);
})

// Keypress for "Enter" key on input field
cityNameInput.addEventListener('keydown', (event) => {
    // event.code 13 = "Enter" key
    if (event.key === "Enter") {
        // Prevent the default action to stop form from being submitted
        event.preventDefault();

        let userCityName = cityNameInput.value;
        getWeatherData(userCityName, apiKey);
        getCityImage(userCityName, unsplashApiKey);
    }
});