const adds = document.getElementById('addjs');
const addsmovil = document.getElementById('addjs-movil');
const info = document.querySelector('.list-container');
const nombre = document.querySelector('h2');
const img = document.querySelectorAll('img')[9];
const precio = document.querySelectorAll('p')[6];
let ident = img.getAttribute('src');
const open = document.getElementById('open');
const alertContainer = document.getElementById('alert__Container');


function pushinfo(infopush) {
  fetch('https://604fd24fc20143001744dd3e.mockapi.io/Carrito', {
    method: 'POST',
    body: JSON.stringify(infopush),
    headers: {
      "Content-Type": "application/json"
    },
  });
}

adds.addEventListener('click', (event) => {
  event.preventDefault();

  if (ident.length === 9) {
    ident = ident.substring(4, 5);
  } else if (ident.length === 10) {
    ident = ident.substring(4, 6);
  }

  const infopush = {
    'img': ident,
    'name': nombre.textContent,
    'priceProduct': precio.textContent
  }
  pushinfo(infopush);

  alertContainer.innerHTML = `
    <div class="alert alert--product">
      <img src="img/check.png" alt="check">
      <h2>Se agrego su producto</h2>
      <button class=" button-principal details" id="close">ok</button>
    </div>`;
  alertContainer.classList.add('show');
  const close = document.getElementById('close');

  close.addEventListener('click', () => {
    alertContainer.classList.remove('show');
  });
});

// Movil
addsmovil.addEventListener('click', (event) => {
  event.preventDefault();

  if (ident.length === 9) {
    ident = ident.substring(4, 5);
  } else if (ident.length === 10) {
    ident = ident.substring(4, 6);
  }

  const infopush = {
    'img': ident,
    'name': nombre.textContent,
    'priceProduct': precio.textContent
  }
  pushinfo(infopush);

  alertContainer.innerHTML = `
    <div class="alert alert--product">
      <img src="img/check.png" alt="check">
      <h2>Se agrego su producto</h2>
      <button class=" button-principal details" id="close">ok</button>
    </div>`;
  alertContainer.classList.add('show');
  const close = document.getElementById('close');

  close.addEventListener('click', () => {
    alertContainer.classList.remove('show');
  });
});
