$(document).on('click', '._paisagem', function () {
  $('.table').removeClass('retrato').addClass('paisagem');
});
$(document).on('click', '._retrato', function () {
  $('.table').removeClass('paisagem').addClass('retrato');
});

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