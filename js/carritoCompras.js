const contentShoppingCart = document.querySelector("#contentShoppingCart");
const botonCancelar = document.querySelector(".botonCancel");

function accionCancelar() {
    contentShoppingCart.innerHTML = " ";
}
botonCancelar.addEventListener("click",accionCancelar);
