export const latestSearches = {
  state: () => ({
    latestSearchesData: [],
  }),
  getters: {},
  mutations: {
    setLatestSearchesData(state, weatherData) {
      state.latestSearchesData.unshift(weatherData);
    },
  },
  actions: {},
  namespaced: true,
};
