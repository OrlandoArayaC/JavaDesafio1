precio = 400000
cantidad = 0
total = 0


valorTotal = document.querySelector(".valor-total")
valorTotal.innerHTML = total
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
cantidadSpan = document.querySelector(".cantidad")

btnMas = document.querySelector(".btnMas")
btnMenos = document.querySelector(".btnMenos")

btnMas.addEventListener ("click", () => {
    cantidad = cantidad + 1
    cantidadSpan.innerHTML = cantidad
    valorTotal.innerHTML = precio * cantidad
})

bntMenos.addEventListener ("click", () => {
    cantidad = cantidad - 1
    if (cantidad < 0) {
        cantidad = 0
    }
    cantidadSpan.innerHTML = cantidad
    valorTotal.innerHTML =  precio * cantidad
})