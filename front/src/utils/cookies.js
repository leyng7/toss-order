
function saveUserToCookie(value) {
  document.cookie = `MEMBER=${value}`;
}

function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)MEMBER\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveUserToCookie,
  getUserFromCookie,
  deleteCookie,
};