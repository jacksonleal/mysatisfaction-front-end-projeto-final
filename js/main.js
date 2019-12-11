$(document).on('click', '._paisagem', function () {
  $('.table').removeClass('retrato').addClass('paisagem');
});
$(document).on('click', '._retrato', function () {
  $('.table').removeClass('paisagem').addClass('retrato');
});