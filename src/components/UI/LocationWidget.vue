<template>
	<section class="location-widget" :class="'location-widget_' + widgetData.widgetSize + '-size'">
			<div class="location-widget__text">
				<h3 v-if="widgetData.isMylocation"> My location </h3>
				<h3 v-else> {{ widgetData.location }} </h3>
				<p style="margin:5px 0 20px"> {{ widgetData.isMylocation ? widgetData.location : widgetData.forecastTime }} </p>
			</div>
			<div class="location-widget__weather">
				<img class="weather-icon" :src="require(`@/assets/svg/${widgetData.WeatherIconSrc}.svg`)">
				<div class="weather__tempreture">
					<p id="currentTempreture"> {{ widgetData.forecast.currentTempreture }}° </p>
					<p id="highAndLowTempreture"> H: {{ widgetData.forecast.highAndLowTempreture[0] }}° L: {{ widgetData.forecast.highAndLowTempreture[1] }}° </p>
				</div>
			</div>
		</section>
</template>

<script>
export default {
	data() {
		return {

		}
	},

	props: {
		widgetData: {
			isMylocation: Boolean,
			location: String,
			forecastDate: String,
			forecastTime: String,
			WeatherIconSrc: String,
			widgetSize: String, // big / medium / small
			forecast: {
				currentTempreture: String,
				highAndLowTempreture: Array,
				humidity: String,
				rainChance: String, // TODO
				windSpeed: String,
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.location-widget {
		position: relative;
		display: flex;
		justify-content: space-between;
		height: 110px;
		padding: 16px;
		background-color: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(8px);
		border-radius: 20px;
		transition: all 0.2s ease 0s;
		cursor: pointer;
		&:hover {
			background-color: rgba(255, 255, 255, 0.2);
		}
	}

	.location-widget__text {
		margin-bottom: 5px;
		h3 {
			font-weight: 700;
			font-size: 16px;
		}
		p {
			font-weight: 500;
			font-size: 14px;
		}
	}

	.location-widget__weather {
		display: flex;
    flex-direction: column;
		justify-content: center;
    align-items: center;
    text-align: center;
	}

	.weather-icon {
		width: 32px;
		height: 32px;
	}

	#currentTempreture {
		font-weight: 700;
		font-size: 24px;
		margin: 5px 0;
	}

	#highAndLowTempreture {
		font-weight: 400;
		font-size: 12px;
	}

	.location-widget_big-size {
		width: 100%;
		margin: 0 auto;
	}

	.location-widget_medium-size {
		min-width: 210px;
		align-items: end;
		margin: 45px auto 16px;

		.location-widget__weather {
			margin: auto 0;
		}
		.weather-icon {
			position: absolute;
			top: -25px;
    	left: 0;
			width: 52px;
			height: 52px;
		}

		#currentTempreture {
			font-size: 32px;
		}
	}
</style>