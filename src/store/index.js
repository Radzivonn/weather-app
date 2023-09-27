import { createStore } from "vuex";
import { currentSearch } from "@/store/currentSearchModule";
import { latestSearches } from "./latestSearches";

export default createStore({
  modules: {
    locationData: currentSearch,
    latestSearches: latestSearches,
  },
});
