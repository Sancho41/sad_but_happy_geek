import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    happiness: 50,
    openModal: false,
  },

  mutations: {
    setHappiness(state, amount) {
      if (state.happiness < 100) state.happiness = amount;
    },
    makeItSad(state) {
      state.happiness = 0;
    },
    makeItNeutral(state) {
      state.happiness = 50;
    },
    switchModal(state, open) {
      state.openModal = open;
    },
  },

  actions: {
    setHappiness(context, amount) {
      context.commit("setHappiness", amount);
    },
    makeItSad(context) {
      context.commit("makeItSad");
    },
    makeItNeutral(context) {
      context.commit("makeItNeutral");
    },
    switchModal(context, open) {
      context.commit("switchModal", open);
    },
  },
});
