export const currentSearch = {
  state: () => ({
    currentLocationData: {},
  }),
  getters: {},
  mutations: {
    setLocationData(state, data) {
      state.currentLocationData = data;
    },
  },
  actions: {},
  namespaced: true,
};
