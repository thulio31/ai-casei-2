import { createStore } from "vuex";

const store = createStore({
    state: {
      user: null, // Armazena o usuário logado
    },
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
      logout(state) {
        state.user = null; // Limpa os dados do usuário no estado
      },
    },
    
    actions: {
      login({ commit }, user) {
        commit("setUser", user);
      },
      logout({ commit }) {
        commit("logout");
      },
    },
    getters: {
      isAuthenticated(state) {
        return !!state.user;
      },
      getUser(state) {
        return state.user;
      },
    },
  });
export default store;
