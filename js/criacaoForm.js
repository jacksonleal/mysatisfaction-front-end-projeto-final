let btnAvaliar = document.querySelector("#lbl-avaliar");
let body = document.querySelector("body");
let title;

window.onload = function () {
  var url_atual = window.location.href;
  //no Surge
  url_atual = url_atual.replace('http://mysatisfaction.surge.sh/formDeAvaliacao.html?', '');
  //localhost
  //url_atual = url_atual.replace('file:///C:/Users/pc/Documents/LEAL/ADS_IV/PROGIN_JESIEL/PROJETO%20FINAL/mysatisfaction-front-end-projeto-final/CriadorDeForms.html?', '');

  var url = "https://mysatisfaction-project-back-en.herokuapp.com/cforms/title/" + url_atual;

  // create an XHR object
  const xhr = new XMLHttpRequest();

  // listen for `load` event
  xhr.onload = () => {
    if (xhr.response != "[]") {
      tapc.innerHTML = xhr.response;
      title = xhr.response;
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

btnAvaliar.addEventListener("click", function () {

  var rads = document.getElementsByName("estrelas");
  var estrelaSelect;
  for (var i = 0; i < rads.length; i++) {
    if (rads[i].checked) {
      //alert(rads[i].id + ", " + i);
      estrelaSelect = i;
    }
  }

  if (estrelaSelect == 0) {
    estrelaSelect = 5;
  } else if (estrelaSelect == 1) {
    estrelaSelect = 4;
  } else if (estrelaSelect == 2) {
    estrelaSelect = 3;
  } else if (estrelaSelect == 3) {
    estrelaSelect = 2;
  } else if (estrelaSelect == 4) {
    estrelaSelect = 1;
  }
  //post
  var url = "https://mysatisfaction-project-back-en.herokuapp.com/favaliacao";

  var data = {};
  data.title = title;
  data.stars = estrelaSelect;

  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
      alert("Avaliação salva");

    } else {
      alert('Não foi possivel salvar, houve um erro');
    }
  }

  xhr.send(json);

  //post

  //alert(estrelaSelect + " Estrelas");

  body.className = "m-obg-js";

  setTimeout(function () {
    body.className = "m-obg-tempo-js";
  }, 5100);

});


