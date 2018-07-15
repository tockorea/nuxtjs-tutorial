import Vuex from 'vuex';

const store = function () {
  return new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment(state, value) {
        state.count += value;
      }
    }
  })
}

export default store;