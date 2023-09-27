export const latestSearches = {
  state: () => ({
    latestSearchesData: [],
  }),
  getters: {},
  mutations: {
    setLatestSearchesData(state, weatherData) {
      state.latestSearchesData.push(weatherData);
    },
  },
  actions: {},
  namespaced: true,
};
