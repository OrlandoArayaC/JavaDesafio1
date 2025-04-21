
let precio = 400000;
let cantidad = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotal = document.querySelector(".valor-total");
const btnMas = document.querySelector(".btnMas");
const btnMenos = document.querySelector(".btnMenos");

precioSpan.textContent = precio;
valorTotal.textContent = 0;

function actualizarTotal() {
    valorTotal.textContent = precio * cantidad;
}

btnMas.addEventListener("click", () => {
    cantidad++;
    cantidadSpan.textContent = cantidad;
    actualizarTotal();
});

btnMenos.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.textContent = cantidad;
        actualizarTotal();
    }
});
