<template>
	
</template>

<script>
import axios from 'axios';
// import { emit } from 'process-nextick-args';

export default {
	data() {
		return {
			APIKEY: '9b7de6c7e4b137f586b5a0aaf630a7f0',
		}
	},
	//`api.openweathermap.org/data/2.5/forecast/daily?city=${this.city}&cnt=16&appid=${this.APIKEY}`
	methods: {
		async getWeather(location) {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=en&appid=${this.APIKEY}&units=metric`; //&mode=json
			const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${this.APIKEY}`
			
			try {
				const response = await axios.get(url5days);
				console.log(response);
				console.log(response.data);
				console.log(response.data.list[0]);
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
			const weatherData = await this.getWeather(location);
			this.$emit('getWeather', weatherData);
		}
	}

}
</script>