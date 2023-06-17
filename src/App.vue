<template>
	<div class="app">
		<div class="wrapper" :class="colorTheme">
			<div class="bgSecondLayer"> </div>
				<router-view></router-view>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			colorTheme: 'dark-mode',
		}
	},
	created() {
		window.addEventListener(
			'beforeunload',
			() => sessionStorage.setItem('colorTheme', JSON.stringify(this.colorTheme))
		);
		const savedTheme = sessionStorage.getItem('colorTheme');
		if (savedTheme) this.colorTheme = JSON.parse(savedTheme);
		const savedSearches = sessionStorage.getItem('latestSearches');
		if (savedSearches && JSON.parse(savedSearches).length > 0)
			this.$store.commit('locationData/setLocationData', JSON.parse(savedSearches)[0]);
	}
}
</script>

<style lang="scss">
@import '@/scss/nullstyle.scss';
@import '@/scss/variables.scss';
@import '@/scss/fonts.scss';

.wrapper {
	position: relative;
	// z-index: -5; // bug
	width: 100%;
	height: 100vh;
	overflow: hidden;
	color: white;
	padding: 16px;
	// font-family: 'Roboto', sans-serif;
}

.bgSecondLayer {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	width: 1213px;
	height: 1213px;
	border-radius: 50%;
	transform: translate(-50%, -35vh) matrix(1, 0, 0, -1, 0, 0);
}

// .main {

// }

// .footer {

// }

.light-mode {
	background: #81BCFF;
	.bgSecondLayer {
		background: linear-gradient(179.21deg, #2359B0 0.68%, #2D72E2 58.23%, #A3CEFF 99.34%);
	}
}

.dark-mode {
	background: #1F1F42;  
		.bgSecondLayer {
		background: linear-gradient(179.21deg, #010C1F 6.85%, #07162F 67.99%, #252550 99.34%);
	}
}

</style>