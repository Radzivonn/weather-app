<template>
	<CustomHeader :pageInfo="pageInfo" ></CustomHeader>

	<main class="main">
		<article class="current-weather-widget">
			<section class="current-weather-widget__main-info">
				<img class="weather-icon" :src="require(`@/assets/svg/${currentWeatherData.WeatherIconSrc}.svg`)">
				<p id="currentTempreture"> {{ currentWeatherData.currentTempreture }}° </p>
				<p id="location"> {{ currentWeatherData.location }} </p>
				<p id="highAndLowTempreture"> H: {{ currentWeatherData.highAndLowTempreture[0] }}° L: {{ currentWeatherData.highAndLowTempreture[1] }}° </p>
			</section>
			<section class="current-weather-widget__secondary-info">
				<div id="rain-chance">
					<img src="@/assets/svg/Icon=CloudRain.svg" alt="">
					<p> {{ currentWeatherData.rainChance }}</p>
				</div>
				<div id="humidity">
					<img src="@/assets/svg/Icon=Drop.svg" alt="">
					<p> {{ currentWeatherData.humidity }}</p>
				</div>
				<div id="wind-speed">
					<img src="@/assets/svg/Icon=Wind.svg" alt="">
					<p> {{ currentWeatherData.windSpeed }}</p>
				</div>
			</section>
		</article>
	</main>

	<!-- <WeatherComponent :location="location" @getWeather="getWeather"></WeatherComponent> -->
</template>

<script>
import CustomHeader from "@/components/UI/CustomHeader";
import WeatherComponent from "@/components/WeatherComponent";

export default {
	components: {
		CustomHeader,
		WeatherComponent
	},

	data() {
		return {
			pageInfo: {
				link: '/searchPage',
				pageName: 'Home'
			},
			location: '',
			currentWeatherData: {
					isMylocation: false,
					location: 'Minsk',
					forecastTime: '12:00',
					WeatherIconSrc: 'cloudy&sunny',
					currentTempreture: '-1',
					highAndLowTempreture: [4, -2],
					humidity: '87%',
					rainChance: '45%',
					windSpeed: '19km/h',
					widgetSize: 'medium'
			},
		}
	},

	methods: {
		// getCurrentWeather(weatherData) {
		// 	if (weatherData === 'noLocation') this.currentWeatherData = {}; // If the location is entered incorrectly
		// 	else {
		// 		this.currentWeatherData = {
		// 			location: this.location,
		// 			forecastTime:
		// 				`${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`,
		// 			WeatherIconSrc: `${weatherData.data.weather[0].main}`,
		// 			currentTempreture: String(Math.round(weatherData.data.main.temp)),
		// 			highAndLowTempreture: [Math.round(weatherData.data.main.temp_max), Math.round(weatherData.data.main.temp_min)],
		// 		};
		// 	}
		// },
	}
}
</script>

<style lang="scss" scoped>

	.main {
		position: relative;
		z-index: 5;
		width: 100%;
		font-family: 'Inter', sans-serif;
		margin: 35px auto;
	}

	.current-weather-widget {
		width: 315px;
    align-items: center;
		margin: 0 auto;
	}
	.current-weather-widget,
	.current-weather-widget__main-info {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	.current-weather-widget__main-info {
		text-align: center;
	}
	.weather-icon {
		width: 150px;
		height: 130px;
	}

	#currentTempreture {
		font-size: 64px;
		font-weight: 700;
		text-align: center;
		text-transform: uppercase;
	}

	#location {
		font-size: 18px;
	}

	#highAndLowTempreture {
		font-size: 16px;
	}

	.current-weather-widget__secondary-info {
		width: 100%;
		height: 35px;
		display: flex;
		justify-content: space-around;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(8px);
		border-radius: 24px;
		& div {
			display: flex;
    	align-items: center;
   	 	gap: 4px;
			font-size: 16px;
		}
	}


</style>