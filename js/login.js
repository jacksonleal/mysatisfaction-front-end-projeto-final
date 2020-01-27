let btnLogin = document.querySelector("#login");
let btnInscreverse = document.querySelector("#inscreverse");
let body = document.querySelector("body");

function inscreverse() {
  body.className = "cadastrar-se-js";
};

function idLogin() {
  body.className = "cadastrar-se-js";
}

btnLogin.addEventListener("click", function () {
  body.className = "fazer-login-js";
});

//*******************************************/ criar usuário
function MyFucLogin() {
  event.preventDefault();

  var userEmail = document.getElementById("emailLogin").value;
  var userPass = document.getElementById("passLogin").value;

  var url = "https://mysatisfaction-project-back-en.herokuapp.com/users/login/" + userEmail + "/" + userPass;

  // create an XHR object
  const xhr = new XMLHttpRequest();

  // listen for `load` event
  xhr.onload = () => {
    if (xhr.response != "[]") {
      window.location = "CriadorDeForms.html?" + userEmail;

    } else {
      alert("E-mail ou senha incorretos");
    }
  };

  // listen for `error` event
  xhr.onerror = () => {
    console.error('Request failed.');
  }

  // create a `GET` request
  xhr.open('GET', url, true);

  // send request
  xhr.send();

  //fim login fun
}

function inscClick() {
  event.preventDefault();

  var usernAME = document.getElementById("username").value;
  var userEmail = document.getElementById("useremail").value;
  var userPass = document.getElementById("userpassword").value;
  var userRole = "admin";

  var url = "https://mysatisfaction-project-back-en.herokuapp.com/users/login/";
  // Get a user
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url + userEmail, true)
  xhr.onload = function () {

    if (xhr.response != "[]") {
      alert('Este E-mail já está cadastrado em nosso sistema!')
      return;
    } else {
      cadastradaUser(usernAME, userEmail, userPass, userRole);
    }
  }
  xhr.send(null);

  //
}

function cadastradaUser(usernAME, userEmail, userPass, userRole) {
  //test

  var url = "https://mysatisfaction-project-back-en.herokuapp.com/users";

  // Post usuário
  var data = {};
  data.name = usernAME;
  data.email = userEmail;
  data.password = userPass;
  data.role = userRole;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
      alert("Usúario cadastrado com sucesso!");
      body.className = "fazer-login-js";
    } else {
      alert('Não foi possivel cadastrar o usuário');
    }
  }

  xhr.send(json);

}