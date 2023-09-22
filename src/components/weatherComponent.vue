<template></template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      APIKEY: "9b7de6c7e4b137f586b5a0aaf630a7f0",
    };
  },
  methods: {
    async getWeather(url) {
      try {
        const response = await axios.get(url);
        console.log(response);
        return this.getSearchData(response);
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
  },
  props: {
    location: String,
  },

  watch: {
    async location(location) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=en&appid=${this.APIKEY}&units=metric`;
      const weatherData = location ? await this.getWeather(url) : "noLocation";
      this.$emit("getWeather", weatherData);
    },
  },
};
</script>
