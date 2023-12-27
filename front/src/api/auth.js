import {auth} from './index';

// users
function loginUser(data) {
  return auth.post('/auth/login', data);
}

function signupUser(data) {
  return auth.post('/auth/signup', data);
}

function logoutUser() {
  return auth.post('/auth/logout');
}

export { loginUser, signupUser, logoutUser };