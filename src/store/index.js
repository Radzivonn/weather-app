import { createStore } from "vuex";
import { latestSearches } from "./latestSearches";

export default createStore({
  modules: {
    latestSearches: latestSearches,
  },
});
