import store from "@/store";
import router from "@/router";

function setInterceptors(instance) {
  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => Promise.reject(error.response),
  );
  instance.interceptors.response.use(
    config => config,
    error => {

      if (error.response.status === 403) {
        store.commit('LOGOUT');
        router.push('/login');
      }

      return Promise.reject(error.response)
    },
  );
  return instance;
}

export { setInterceptors };