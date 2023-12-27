import axios from 'axios';
import {setInterceptors} from '@/api/config/interceptors';

// instance & interceptor
function create(url, options) {
  return axios.create(Object.assign({baseURL: url}, options));
}

function createWithAuth(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  setInterceptors(instance);
  return instance;
}

export const auth = create();
export const posts = createWithAuth(`${import.meta.env.VITE_APP_API_URL}posts/`);