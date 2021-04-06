const cardUpdates = document.querySelector('.content-cards');
const filtro = document.querySelector('select');

function cardUpdate() {
  const currency = document.querySelector('select').value;
  if (currency === 'mayor precio') {
    cardUpdates.innerHTML = `
    <div class="card">
      <img src="img/6.png" alt="Suculenta Echeveria">
      <h3 class="titleCard">Echeveria Black Knight</h3>
      <p class="price">9.00</p>
      <img src="img/estrellas.png" alt="Calificación" class="stars">
      <a href="producto-blacknight.html" class="button-principal button--margin">Ver Detalles</a>
    </div>
    <div class="card">
    <img src="img/5.png" alt="Suculenta Echeveria">
    <h3 class="titleCard">Echeveria Lola</h3>
    <p class="price">8.00</p>
    <img src="img/estrellas.png" alt="Calificación" class="stars">
    <a href="producto-lola.html" class="button-principal button--margin">Ver Detalles</a>
    </div>
    <div class="card">
    <img src="img/3.png" alt="Suculenta Echeveria">
    <h3 class="titleCard">Echeveria Laui</h3>
    <p class="price">7.00</p>
    <img src="img/estrellas.png" alt="Calificación" class="stars">
    <a href="producto-laui.html" class="button-principal button--margin">Ver Detalles</a>
  </div>
  <div class="card2">
    <img src="img/1.png" alt="Suculenta Echeveria">
    <h3 class="titleCard">Echeveria Agavoides</h3>
    <p class="price">6.00</p>
    <img src="img/estrellas.png" alt="Calificación" class="stars">
    <a href="producto-agavoides.html" class="button-principal button--margin">Ver Detalles</a>
  </div>
  <div class="card2">
    <img src="img/2.png" alt="Suculenta Echeveria">
    <h3 class="titleCard">Echeveria Black Prince</h3>
    <p class="price">4.00</p>
    <img src="img/estrellas.png" alt="Calificación" class="stars">
    <a href="producto-blackprince.html" class="button-principal button--margin">Ver Detalles</a>
  </div>

  <div class="card2">
    <img src="img/4.png" alt="Suculenta Echeveria">
    <h3 class="titleCard">Echeveria Champán Rosa</h3>
    <p class="price">2.00</p>
    <img src="img/estrellas.png" alt="Calificación" class="stars">
    <a href="producto-champan.html" class="button-principal button--margin">Ver Detalles</a>
  </div>
    `;
  } else {
    cardUpdates.innerHTML = `
  <div class="card">
    <img src="img/4.png" alt="Suculenta Echeveria">
    <h3 class="titleCard">Echeveria Champán Rosa</h3>
    <p class="price">2.00</p>
    <img src="img/estrellas.png" alt="Calificación" class="stars">
    <a href="producto-champan.html" class="button-principal button--margin">Ver Detalles</a>
  </div>
  <div class="card">
    <img src="img/2.png" alt="Suculenta Echeveria">
    <h3 class="titleCard">Echeveria Black Prince</h3>
    <p class="price">4.00</p>
    <img src="img/estrellas.png" alt="Calificación" class="stars">
    <a href="producto-blackprince.html" class="button-principal button--margin">Ver Detalles</a>
  </div>
  <div class="card">
    <img src="img/1.png" alt="Suculenta Echeveria">
    <h3 class="titleCard">Echeveria Agavoides</h3>
    <p class="price">6.00</p>
    <img src="img/estrellas.png" alt="Calificación" class="stars">
    <a href="producto-agavoides.html" class="button-principal button--margin">Ver Detalles</a>
  </div>
    <div class="card2">
    <img src="img/3.png" alt="Suculenta Echeveria">
    <h3 class="titleCard">Echeveria Laui</h3>
    <p class="price">7.00</p>
    <img src="img/estrellas.png" alt="Calificación" class="stars">
    <a href="producto-laui.html" class="button-principal button--margin">Ver Detalles</a>
  </div>
    <div class="card2">
    <img src="img/5.png" alt="Suculenta Echeveria">
    <h3 class="titleCard">Echeveria Lola</h3>
    <p class="price">8.00</p>
    <img src="img/estrellas.png" alt="Calificación" class="stars">
    <a href="producto-lola.html" class="button-principal button--margin">Ver Detalles</a>
    </div>
    <div class="card2">
      <img src="img/6.png" alt="Suculenta Echeveria">
      <h3 class="titleCard">Echeveria Black Knight</h3>
      <p class="price">9.00</p>
      <img src="img/estrellas.png" alt="Calificación" class="stars">
      <a href="producto-blacknight.html" class="button-principal button--margin">Ver Detalles</a>
    </div>
    `;
  }
}

cardUpdate();

filtro.addEventListener('click', cardUpdate);
