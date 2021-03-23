const carrito = document.querySelectorAll('a')[9];
const cierre = document.querySelectorAll('a')[3];

function openNave() {
  document.getElementById('drawer--js').classList.remove('drawer--close');
  document.getElementById('drawer--js').classList.add('drawer--open');
}

function closeNave() {
  document.getElementById('drawer--js').classList.remove('drawer--open');
  document.getElementById('drawer--js').classList.add('drawer--close');
}

carrito.addEventListener('click', (e) => {
  e.preventDefault();
  openNave();
});
console.log(cierre);

cierre.addEventListener('click', (e) => {
  e.preventDefault();
  closeNave();
});
