<template>
  <CustomHeader :pageInfo="pageInfo"></CustomHeader>

  <main
    v-if="Object.keys($store.state.locationData.currentLocationData).length > 0"
    class="main"
  >
    <article class="current-weather-widget">
      <section class="current-weather-widget__main-info">
        <img
          class="weather-icon"
          :src="getImagePath($store.state.locationData.currentLocationData)"
        />
        <p id="currentTempreture">
          {{
            $store.state.locationData.currentLocationData.forecast
              .currentTempreture
          }}°
        </p>
        <p id="location">
          {{ $store.state.locationData.currentLocationData.location }}
        </p>
        <p id="highAndLowTempreture">
          H:
          {{
            $store.state.locationData.currentLocationData.forecast
              .highAndLowTempreture[0]
          }}° L:
          {{
            $store.state.locationData.currentLocationData.forecast
              .highAndLowTempreture[1]
          }}°
        </p>
      </section>
      <section class="current-weather-widget__secondary-info">
        <div id="rain-chance">
          <img src="@/assets/svg/Icon=CloudRain.svg" alt="" />
          <p>
            {{
              $store.state.locationData.currentLocationData.forecast.rainChance
            }}
          </p>
        </div>
        <div id="humidity">
          <img src="@/assets/svg/Icon=Drop.svg" alt="" />
          <p>
            {{
              $store.state.locationData.currentLocationData.forecast.humidity
            }}
          </p>
        </div>
        <div id="wind-speed">
          <img src="@/assets/svg/Icon=Wind.svg" alt="" />
          <p>
            {{
              $store.state.locationData.currentLocationData.forecast.windSpeed
            }}
          </p>
        </div>
      </section>
    </article>
    <article class="upcoming-forecast-widget">
      <div class="header">
        <h3>Today</h3>
        <p class="date">
          {{ $store.state.locationData.currentLocationData.forecastDate }}
        </p>
      </div>
      <section class="upcoming-forecast"></section>
    </article>
  </main>
</template>

<script>
import CustomHeader from "@/components/UI/CustomHeader";
import ForecastWidget from "@/components/UI/ForecastWidget";
import WeatherComponent from "@/components/WeatherComponent";
import { getImagePath } from "@/components/helpers.js";

export default {
  components: {
    CustomHeader,
    ForecastWidget,
    WeatherComponent,
  },

  data() {
    return {
      pageInfo: {
        link: "/searchPage",
        pageName: "Home",
      },
      getImagePath: getImagePath,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  z-index: 5;
  width: 100%;
  font-family: "Inter", sans-serif;
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
.upcoming-forecast-widget {
  width: 100%;
  height: 160px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 24px;
  margin-top: 20px;
  padding: 16px 16px 24px 16px;
  .header {
    display: flex;
    justify-content: space-between;
    font-family: "Inter", sans-serif;
    font-size: 1.3em;
    margin-bottom: 16px;
    h3 {
      font-weight: 700;
    }
    .date {
      font-weight: 400;
    }
  }
}

.upcoming-forecast {
  width: 88%;
  height: 85px;
  display: flex;
  gap: 16px;
  margin: 0 auto;
}
</style>
