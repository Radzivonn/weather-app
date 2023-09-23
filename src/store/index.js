import { createStore } from "vuex";
import { currentSearch } from "@/store/currentSearchModule";
import { dailyForecast } from "./dailyForecast";

export default createStore({
  modules: {
    locationData: currentSearch,
    dailyForecast: dailyForecast,
  },
});
