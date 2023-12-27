import {createStore} from 'vuex';
import {loginUser} from '@/api/auth';
import {deleteCookie, getUserFromCookie, saveUserToCookie,} from '@/utils/cookies.js';

export default createStore({
  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    LOGOUT(state) {
      state.user = null;
      deleteCookie('MEMBER');
    },
  },
  actions: {
    async LOGIN({commit}, data) {
      await loginUser(data);
      const user = {
        email: data.email
      }
      commit('SET_USER', user);
      saveUserToCookie(user.email);
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user || getUserFromCookie();
    },
  },
});