
window.onload = function () {
  var url_atual = window.location.href;
  url_atual = url_atual.replace('http://mysatisfaction.surge.sh/CriadorDeForms.html?', '');

  var url = "https://mysatisfaction-project-back-en.herokuapp.com/users/email/" + url_atual;

  // create an XHR object
  const xhr = new XMLHttpRequest();

  // listen for `load` event
  xhr.onload = () => {
    if (xhr.response != "[]") {
      sbvnc.innerHTML = "Seja bem-vindo(a), " + xhr.response;

    } else {
      alert("Aogo deu errado.");
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

};

function myFuncSalvar() {
  event.preventDefault();

  //

  var user = document.getElementById("texarea2").value + "/" +
    document.getElementById("texarea1").value;


  var xmlHttp = "https://mysatisfaction-project-back-en.herokuapp.com/cforms/" + user;

  //requisição POST
  var ajax = new XMLHttpRequest();

  // Seta tipo de requisição: Post e a URL da API
  ajax.open("POST", xmlHttp, true);
  ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // Seta paramêtros da requisição e envia a requisição
  ajax.send();

  document.getElementById("texarea2").value = "";
  document.getElementById("texarea1").value = "";

}

function mostrarAtivo(tag) {
  let tag_li = document.getElementById('lista_menu');
  let tag_a = tag_li.getElementsByTagName('a');
  for (i = 0; i < tag_a.length; i++) {
    tag_a[i].style.backgroundColor = "#993399";
    tag_a[i].style.color = "";
  }
  tag.style.backgroundColor = "purple"; // altera o fundo
  tag.style.color = "#ffffff"; // altera a cor
}

function keydownFuncao() {
  let texto = document.getElementById("texarea1").value;
  document.getElementById("h1KeyDown").innerHTML = texto;
}


//

