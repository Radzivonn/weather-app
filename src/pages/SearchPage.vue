<template>
	<CustomHeader :pageInfo="pageInfo"></CustomHeader>

	<main class="main">
		<article>
			<form class="search-line" @submit.prevent>
				<img class="search-icon" src="@/assets/svg/loupe.svg">
				<input class="search-line__input" type="text" placeholder="Search city, country or location" @focusout="setLocation" @keyup.enter.prevent="setLocation"> 
			</form>

			<LocationWidget v-if="Object.keys(currentSearch).length > 0" :widgetData="currentSearch" style="margin-bottom: 15px"></LocationWidget>

			<h3 class="widget-name"> Saved locations </h3>
			<article class="saved-locations-block">
				<LocationWidget v-for="data in savedLocationsWeather" :key="data" :widgetData="data"></LocationWidget>
			</article>

			<h3 class="widget-name"> Latest searches </h3>
			<article class="latest-searches-block">
				<LocationWidget v-for="data in latestSearches" :key="data" :widgetData="data"></LocationWidget>
			</article>
		</article>
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
			latestSearches: [],
			currentSearch: {}
		}
	},

	methods: {
		setLocation(e) {
			this.location = e.target.value;
		},
		getWeather(searchData) {
			if (searchData) {
				this.latestSearches.unshift(searchData);
				this.currentSearch = this.latestSearches[0];
			}
		}
	},

	created() {
		window.addEventListener(
			'beforeunload',
			() => sessionStorage.setItem('latestSearches', JSON.stringify(this.latestSearches))
		);
		const savedOptions = sessionStorage.getItem('latestSearches');
		if (savedOptions) this.latestSearches = JSON.parse(savedOptions);
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
		margin: 15px 0 10px;
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