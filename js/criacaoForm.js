let btnAvaliar = document.querySelector("#lbl-avaliar");
let body = document.querySelector("body");

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

  //alert(estrelaSelect + " Estrelas");

  body.className = "m-obg-js";

  setTimeout(function () {
    body.className = "m-obg-tempo-js";
  }, 5100);

});


