import {auth} from './index';

// users
function loginUser(data) {
  return auth.post('/auth/login', data);
}

function signupUser(data) {
  return auth.post('/auth/signup', data);
}

export { loginUser, signupUser };