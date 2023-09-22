<template>
  <section class="forecast-widget">
    <time class="forecast-time"> {{ widgetData.forecastTime }} </time>
    <img
      class="weather-icon"
      :src="require(`@/assets/svg/${widgetData.weatherIconSrc}.svg`)"
    />
    <p class="tempreture">{{ widgetData.tempreture }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    widgetData: {
      forecastTime: String,
      weatherIconSrc: String,
      tempreture: String,
    },
  },
};
</script>

<style lang="scss">
.forecast-widget {
  width: 50px;
  height: 85px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.forecast-time {
  font-weight: 500;
  font-size: 12px;
}

.weather-icon {
  width: 24px;
  height: 24px;
}

.tempreture {
  font-size: 18px;
}

.forecast-time,
.tempreture {
  font-weight: 500;
}
</style>
