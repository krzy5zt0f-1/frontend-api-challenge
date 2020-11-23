window.onload = function() {
fetchPeeps();
}

function getNewUser() {
  var userName = document.getElementById ("username");
  var password = document.getElementById ("password");
  postUser(userName.value, password.value);
  alert("Your Account was created, You can now Log in");
}

function getNewSession() {
  var userName = document.getElementById ("user-name");
  var password = document.getElementById ("pass");
  logIn(userName.value, password.value);
}
