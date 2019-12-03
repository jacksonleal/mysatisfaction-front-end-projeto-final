let btnLogin = document.querySelector("#lbl-avaliar");
let body = document.querySelector("body");

btnLogin.addEventListener("click", function () {
  body.className = "m-obg-js";

  setTimeout(function () {
    body.className = "m-obg-tempo-js";
  }, 5100);

});
