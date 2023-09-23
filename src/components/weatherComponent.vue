<template></template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      API_KEY: "9b7de6c7e4b137f586b5a0aaf630a7f0",
      FORECASTS_AMOUNT: 6,
    };
  },
  methods: {
    async getWeather(url) {
      try {
        const response = await axios.get(url);
        return this.getSearchData(response);
      } catch (err) {
        console.log(err);
      }
    },
    async getDailyForecast(url) {
      try {
        const response = await axios.get(url);
        return this.getDailyForecastData(response);
      } catch (err) {
        console.log(err);
      }
    },
    getSearchData(weatherData) {
      if (weatherData === "noLocation")
        return false; // If the location is entered incorrectly
      else {
        return {
          isMylocation: false,
          location: this.location,
          weatherDescription:
            weatherData.data.weather[0].description.replaceAll(" ", ""),
          WeatherIconSrc: `${weatherData.data.weather[0].main.replaceAll(
            " ",
            ""
          )}`,
          widgetSize: "big",
          forecastDate: new Date().toLocaleString("en", {
            month: "long",
            day: "numeric",
          }),
          forecastTime: `${new Date().getHours()}:${
            new Date().getMinutes() < 10
              ? "0" + new Date().getMinutes()
              : new Date().getMinutes()
          }`,
          forecast: {
            currentTempreture: String(Math.round(weatherData.data.main.temp)),
            highAndLowTempreture: [
              Math.round(weatherData.data.main.temp_max),
              Math.round(weatherData.data.main.temp_min),
            ],
            humidity: String(weatherData.data.main.humidity),
            rainChance: "", // TODO
            windSpeed: String(weatherData.data.wind.speed),
          },
        };
      }
    },
    getDailyForecastData(dailyForecastResponse) {
      return dailyForecastResponse.data.list.map((forecast) => {
        return {
          forecastTime: new Date(forecast.dt_txt).toLocaleString("en", {
            hour: "numeric",
          }),
          weatherIconSrc: forecast.weather[0].icon,
          temperature: String(Math.round(forecast.main.temp)),
        };
      });
    },
  },
  props: {
    location: String,
  },

  watch: {
    async location(location) {
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=en&appid=${this.API_KEY}&units=metric`;
      const dailyForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=en&appid=${this.API_KEY}&units=metric&cnt=${this.FORECASTS_AMOUNT}`;
      const weatherData = location
        ? await this.getWeather(currentWeatherUrl)
        : "noLocation";
      const dailyForecast = location
        ? await this.getDailyForecast(dailyForecastUrl)
        : "noLocation";
      this.$emit("getWeather", weatherData);
      this.$emit("getDailyForecast", dailyForecast);
    },
  },
};
</script>
