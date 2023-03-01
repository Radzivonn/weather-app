<template>
	<button @click="getWeather"> get Weather</button>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			APIKEY: '9b7de6c7e4b137f586b5a0aaf630a7f0',
			city: 'Minsk',
		}
	},
	//`api.openweathermap.org/data/2.5/forecast/daily?city=${this.city}&cnt=16&appid=${this.APIKEY}`
	methods: {
		async getWeather() {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=en&appid=${this.APIKEY}&units=metric`; //&mode=json
			const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.APIKEY}`
			
			try {
				const response = await axios.get(url5days);
				console.log(response);
				console.log(response.data);
				console.log(response.data.list[0]);
				// const response2 = await fetch(url);
				// console.log(response2.json())
			} catch(err) {
				alert(err);
			}
		}
	}
}
</script>

<style>

</style>