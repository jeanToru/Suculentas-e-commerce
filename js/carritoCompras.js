function contendor(cartInfo, i) {
  // Obtengo el padre de el div de los paises.
  const contentCart = document.getElementById('shoppingCart');
  // tomo la lista del HTML y la guardo en la constante lista.
  const divSubPadre = document.createElement('div');
  divSubPadre.setAttribute('class', 'shoppingCart__content clearfix');

  // agrego lista a paisinfo.
  contentCart.appendChild(divSubPadre);

  // Creo elementos HTML para ver la Info de cada pelicula y la guardo en la constante content.
  const content = `
    <div class="shoppingCart__content--img">
      <img src="img/carrito-1.png" alt="Echeveria Champán Rosa">
    </div>

    <div class="shoppingCart__content--title">
      <p>${cartInfo.name}</p>
    </div>

    <div class="shoppingCart__content--info clearfix">
      <p class="info--amount">2</p>
      <p class="info--cost">${cartInfo.priceProduct}</p>
      <button id="delete${cartInfo.id}" class="info--button delete">x</button>
    </div>
  `;

  // se mete toda la informacion que hay en content a lista.
  divSubPadre.innerHTML = content;
}

let inforCarrito = [];
function contendor(cardinfo) {
  // Obtengo el padre de el div de los paises.
  const contentCart = document.getElementById('shoppingCart');
  // tomo la lista del HTML y la guardo en la constante lista.
  const divsubpadre = document.createElement('div');
  divsubpadre.setAttribute('class', 'shoppingCart__content clearfix');
  const shoppingCartcontentimg = document.createElement('div');
  shoppingCartcontentimg.setAttribute('class', 'shoppingCart__content--img');
  const img = document.createElement('img');
  img.setAttribute('src', 'img/carrito-1.png');
  img.setAttribute('alt', `${cardinfo.name}`);
  const shoppingCartcontenttitle = document.createElement('div');
  shoppingCartcontenttitle.setAttribute('class', 'shoppingCart__content--title');
  const parrafo = document.createElement('p');
  parrafo.innerHTML = `${cardinfo.name}`;
  const shoppingCartcontentinfo = document.createElement('div');
  shoppingCartcontentinfo.setAttribute('class', 'shoppingCart__content--info');
  const parrafoinfo = document.createElement('p');
  parrafoinfo.setAttribute('class','info--amount');
  parrafoinfo.innerHTML = '1';
  const parrafocost = document.createElement('p');
  parrafocost.setAttribute('class','info--cost');
  parrafocost.innerHTML = `${cardinfo.priceProduct}`;
  const boton = document.createElement('button');
  boton.setAttribute('id', `delete-${cardinfo.id}`);
  boton.setAttribute('class','info--button');
  boton.dataset.taskId = cardinfo.id;
  boton.innerHTML = 'X';

  // agrego lista a paisinfo.
  shoppingCartcontentimg.appendChild(img);
  divsubpadre.appendChild(shoppingCartcontentimg);
  shoppingCartcontenttitle.appendChild(parrafo);
  divsubpadre.appendChild(shoppingCartcontenttitle);
  shoppingCartcontentinfo.appendChild(parrafoinfo);
  shoppingCartcontentinfo.appendChild(parrafocost);
  shoppingCartcontentinfo.appendChild(boton);
  divsubpadre.appendChild(shoppingCartcontentinfo);
  contentCart.appendChild(divsubpadre);
  // Creo elementos HTML para ver la Info de cada pelicula y la guardo en la constante content.
  boton.addEventListener('click', (event) => {
    const taskId = event.currentTarget.dataset.taskId;
    //deleteTask(taskId);
    // Borra la tarea en el DOM.
    event.currentTarget.parentNode.parentNode.remove();
  });
}

fetch("https://604fd24fc20143001744dd3e.mockapi.io/Products")
  .then((response) => response.json())
  .then((data) => {
    inforCarrito = data;
    // tomo el id del contenedor y lo guardo en contentCart
    const contentCart = document.getElementById('shoppingCart');
    // limpio el contenedor donde se muestran los resultados
    contentCart.innerHTML = '';
    // hago un ciclo para llamar la funcion contenedor
    for (let i = 0; i < inforCarrito.length; i += 1) {
      contendor(inforCarrito[i], i);
    }
  });

