const back = document.getElementById('back');
const go = document.getElementById('go');
const content = document.querySelector('.cardHide');

go.addEventListener('click', (event) => {
  event.preventDefault();
  content.classList.add('hide');
});
// Funcion para desplazar el carrucel de miniaturas
back.addEventListener('click', (event) => {
  event.preventDefault();
  content.classList.remove('hide');
});
