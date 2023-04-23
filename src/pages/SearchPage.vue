<template>
	<CustomHeader :pageInfo="pageInfo"></CustomHeader>
	<main class="main">
		<div class="search-line">
			<img class="search-icon" src="@/assets/svg/loupe.svg">
			<input class="search-line__input" type="text" placeholder="Search city, country or location" @focusout="setLocation" @keyup.enter="setLocation"> 
		</div>
		<LocationWidget v-if="Object.keys(searchData).length !== 0" :widgetData="searchData" style="margin-bottom: 15px"></LocationWidget>

		<!-- <LocationWidget :widgetData="{
					isMylocation: true,
					location: 'Minsk',
					forecastTime: '12:00',
					WeatherIconSrc: 'cloudy',
					currentTempreture: '-1',
					highAndLowTempreture: [4, -2],
					widgetSize: 'big'
				}"></LocationWidget> -->
		
		<h3 class="widget-name" style="margin: 15px 0 10px"> Saved locations </h3>
		<div class="saved-locations-block">
			<LocationWidget v-for="data in savedLocationsWeather" :key="data" :widgetData="data"></LocationWidget>
		</div>

		<h3 class="widget-name" style="margin: 15px 0 10px"> Latest searches </h3>
		<div class="latest-searches-block">
			<LocationWidget v-for="data in latestSearchesWeather" :key="data" :widgetData="data"></LocationWidget>
		</div>

	</main>

	<WeatherComponent :location="location" @getWeather="getWeather"></WeatherComponent>
</template>

<script>
import CustomHeader from "@/components/UI/CustomHeader";
import LocationWidget from "@/components/UI/LocationWidget";
import WeatherComponent from "@/components/WeatherComponent";

export default {
	components: {
		CustomHeader,
		LocationWidget,
		WeatherComponent
	},

	data() {
		return {
			pageInfo: {
				link: '/',
				pageName: 'Search'
			},
			location: '',
			searchData: {},
			savedLocationsWeather: [
				{
					isMylocation: false,
					location: 'Minsk',
					forecastTime: '12:00',
					WeatherIconSrc: 'Rain',
					currentTempreture: '-1',
					highAndLowTempreture: [4, -2],
					widgetSize: 'medium'
				},
				{
					isMylocation: false,
					location: 'Minsk',
					forecastTime: '12:00',
					WeatherIconSrc: 'sunny',
					currentTempreture: '-1',
					highAndLowTempreture: [4, -2],
					widgetSize: 'medium'
				},
				{
					isMylocation: false,
					location: 'Minsk',
					forecastTime: '12:00',
					WeatherIconSrc: 'Clouds',
					currentTempreture: '-1',
					highAndLowTempreture: [4, -2],
					widgetSize: 'medium'
				}
			],
			latestSearchesWeather: []
		}
	},

	methods: {
		setLocation(e) {
			this.location = e.target.value;
		},
		getWeather(weatherData) {
			if (weatherData === 'noLocation') this.searchData = {}; // If the location is entered incorrectly
			else {
				this.searchData = {
					isMylocation: false,
					location: this.location,
					forecastTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
					WeatherIconSrc: `${weatherData.data.weather[0].main}`,
					currentTempreture: String(Math.round(weatherData.data.main.temp)),
					highAndLowTempreture: [Math.round(weatherData.data.main.temp_max), Math.round(weatherData.data.main.temp_min)],
					widgetSize: 'big'
				};
				this.latestSearchesWeather.unshift(this.searchData);
				console.log(weatherData);
			}
		},
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

	.search-line {
		position: relative;
		height: 44px;
		margin: 0 auto 25px;
	}

	.search-icon {
		position: absolute;
		transform: translate(20px, 70%);
	}

	.search-line__input {
		width: 100%;
		height: inherit;
		background: rgba(255, 255, 255, 0.1);
		padding: 12px 45px;
		border: 1px solid #E9E9EA;
		border-radius: 25px;
		// font-family: 'Inter', sans-serif;
		font-weight: 400;
		font-size: 16px;
		color: #F4F4F4;
	}

	.widget-name {
		font-weight: 600;
		font-size: 20px; 
	}
	
	.saved-locations-block {
		display: flex;
		gap: 10px;
		overflow-x: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
	}

	.latest-searches-block {
		width: 100%;
		max-height: 360px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		overflow-y: scroll;
	}

</style>