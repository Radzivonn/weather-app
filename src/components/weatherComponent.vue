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
				return response
			} catch(err) {
				console.log(err);
			}
		}
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