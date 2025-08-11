const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=ae95d6e316bea63b7c52aae8fd6b329f&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Please try again.", undefined);
    } else {
      const data = body.current;
      const feelslike = data.feelslike;
      const humidity = data.humidity;
      const temperature = data.temperature;
      const precip = data.precip;
      const weatherDescription = data.weather_descriptions[0];
      callback(
        undefined,
        `${weatherDescription}. The temperature is currently ${temperature}°C, feels like ${feelslike}°C, the humidity is ${humidity}%, and the precipitation chances are ${precip}%`
      );
    }
  });
};

module.exports = forecast;
