
window.onload = function () {
  var url_atual = window.location.href;
  //no Surge
  url_atual = url_atual.replace('http://mysatisfaction.surge.sh/CriadorDeForms.html?', '');
  //localhost
  //url_atual = url_atual.replace('file:///C:/Users/pc/Documents/LEAL/ADS_IV/PROGIN_JESIEL/PROJETO%20FINAL/mysatisfaction-front-end-projeto-final/CriadorDeForms.html?', '');

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

  var title = document.getElementById("texarea2").value;
  var description = document.getElementById("texarea1").value;


  var url = "https://mysatisfaction-project-back-en.herokuapp.com/cforms";

  var data = {};
  data.title = title;
  data.description = description;

  var json = JSON.stringify(data);


  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
      alert("Modelo Salvo");

    } else {
      alert('Não foi possivel cadastrar o modelo');
    }
  }

  xhr.send(json);

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

  if (tag.id == "mf") {
    getCforms();
  }

}

function getCforms() {

  var url = "https://mysatisfaction-project-back-en.herokuapp.com/cforms";

  // create an XHR object
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'text';
  // listen for `load` event
  xhr.onload = () => {
    if (xhr.response != "[]") {

      var jsonResponse = JSON.parse(xhr.responseText);
      //btnPubliqr.innerHTML = jsonResponse[0].title;

      for (var i = 0; i < jsonResponse.length; i++) {
        // Buscar elemento pai
        var elemento_pai = document.getElementById("btnPubliqrID");
        // 1. Create the button
        var button = document.createElement("button");
        button.className = "btn btn-2";
        button.innerHTML = jsonResponse[i].title;

        // 2. Append somewhere
        var body = elemento_pai;
        body.appendChild(button);

        // 3. Add event handler
        button.addEventListener("click", function () {
          window.location = "formDeAvaliacao.html?" + this.innerHTML;
        });
      }

    } else {
      alert("Houve um erro");
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

}

function keydownFuncao() {
  let texto = document.getElementById("texarea1").value;
  document.getElementById("h1KeyDown").innerHTML = texto;
}

function listAvaliacoes() {

  var url = "https://mysatisfaction-project-back-en.herokuapp.com/favaliacao";

  // create an XHR object
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'text';
  // listen for `load` event
  xhr.onload = () => {
    if (xhr.response != "[]") {

      var jsonResponse = JSON.parse(xhr.responseText);
      //btnPubliqr.innerHTML = jsonResponse[0].title;

      for (var i = 0; i < jsonResponse.length; i++) {
        // Buscar elemento pai
        var elemento_pai = document.getElementById("paiTbody");
        // 1. Create the button
        var tr = document.createElement("tr");
        var td = document.createElement("td");

        td.innerHTML = jsonResponse[i]._id;
        td.innerHTML = jsonResponse[i].title;
        td.innerHTML = jsonResponse[i].stars;

        // 2. Append somewhere
        var body = elemento_pai;
        body.appendChild(tr);
        tr.appendChild(td);

        // 3. Add event handler
        button.addEventListener("click", function () {
          window.location = "formDeAvaliacao.html?" + this.innerHTML;
        });
      }

    } else {
      alert("Houve um erro");
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

}