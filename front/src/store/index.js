import {createStore} from 'vuex';
import {loginUser, logoutUser} from '@/api/auth';
import {deleteCookie, getUserFromCookie, saveUserToCookie,} from '@/utils/cookies.js';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    async LOGOUT(state) {
      await logoutUser();
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