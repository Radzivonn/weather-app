import { createStore } from "vuex";
import { currentSearch } from "@/store/currentSearch";
import { latestSearches } from "./latestSearches";

export default createStore({
  modules: {
    locationData: currentSearch,
    latestSearches: latestSearches,
  },
});
