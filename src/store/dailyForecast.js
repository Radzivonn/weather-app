export const dailyForecast = {
  state: () => ({
    dailyForecastData: [],
  }),
  getters: {},
  mutations: {
    setDailyForecastData(state, data) {
      state.dailyForecastData = data;
    },
  },
  actions: {},
  namespaced: true,
};
