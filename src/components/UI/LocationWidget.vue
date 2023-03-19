<template>
	<div class="location__widget" :class="widgetData.widgetSize + 'Widget'">
			<div class="location__text">
				<h3 v-if="widgetData.isMylocation"> My location </h3>
				<h3 v-else> {{ widgetData.location }} </h3>
				<p style="margin:5px 0 20px"> {{ widgetData.isMylocation ? widgetData.location : widgetData.forecastTime }} </p>
			</div>
			<div class="location__weather">
				<img class="weather__icon" :src="require(`@/assets/svg/${widgetData.WeatherIconSrc}.svg`)">
				<div class="tempreture">
					<p id="currentTempreture"> {{ widgetData.currentTempreture }}° </p>
					<p id="highAndLowTempreture"> H: {{ widgetData.highAndLowTempreture[0] }}° L: {{ widgetData.highAndLowTempreture[1] }}° </p>
				</div>
			</div>
		</div>
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
			forecastTime: String,
			WeatherIconSrc: String,
			currentTempreture: String,
			highAndLowTempreture: Array,
			widgetSize: String // big / medium / small
		}
	}
}
</script>

<style lang="scss" scoped>
.location__widget {
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
		// font-family: 'Inter', sans-serif;
	}

	.location__text {
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

	.location__weather {
		display: flex;
    flex-direction: column;
		justify-content: center;
    align-items: center;
    text-align: center;
	}

	.weather__icon {
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

	.bigWidget {
		width: 100%;
		margin: 0 auto;
	}

	.mediumWidget {
		min-width: 210px;
		align-items: end;
		margin: 45px auto 16px;

		.location__weather {
			margin: auto 0;
		}
		.weather__icon {
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