let btnLogin = document.querySelector("#login");
let btnInscreverse = document.querySelector("#inscreverse");
let body = document.querySelector("body");
let btnLogarNoSis = document.querySelector("#logarNoSis");

btnLogin.addEventListener("click", function () {
  body.className = "fazer-login-js";
});

btnInscreverse.addEventListener("click", function () {
  body.className = "cadastrar-se-js";
});

btnLogarNoSis.addEventListener("click", function () {
  event.preventDefault();
  window.location = "CriadorDeForms.html";
});
