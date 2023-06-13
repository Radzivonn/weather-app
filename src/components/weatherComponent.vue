<template>
	
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			APIKEY: '9b7de6c7e4b137f586b5a0aaf630a7f0',
		}
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
		getSearchData(weatherData) {
			if (weatherData === 'noLocation') return false; // If the location is entered incorrectly
			else {
				return {
					isMylocation: false,
					location: this.location,
					forecastTime:
						`${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`,
					WeatherIconSrc: `${weatherData.data.weather[0].main}`,
					currentTempreture: String(Math.round(weatherData.data.main.temp)),
					highAndLowTempreture: [Math.round(weatherData.data.main.temp_max), Math.round(weatherData.data.main.temp_min)],
					widgetSize: 'big'
				};
			}
		},
	},
	props: {
		location: String
	},

	watch: {
		async location(location) {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=en&appid=${this.APIKEY}&units=metric`;
			const weatherData = location ? await this.getWeather(url) : 'noLocation';
			this.$emit('getWeather', weatherData);
		}
	}
}
</script>