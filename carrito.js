const cantidadElement = document.getElementById("cantidad");
const tamanioElement = document.getElementById("tamanio");

const agregarAlCarritoButton = document.getElementById("agregarAlCarrito");
const carritoListaElement = document.getElementById("carritoLista");
const totalElement = document.getElementById("total");
const realizarCompraButton = document.getElementById("realizarCompra");
const small = 9500;
const medium = 12000;
const large = 15000;

let carrito = [];

agregarAlCarritoButton.addEventListener("click", () => {
    const nombreProducto = "Natychips";
    let precioElement = 0; // Inicializa el precio en 0
    const tamanio = tamanioElement.value;
    
    // Calcula el precio basado en el tamaño seleccionado
    if (tamanio === "small") {
        precioElement = small;
    } else if (tamanio === "medium") {
        precioElement = medium;
    } else if (tamanio === "large") {
        precioElement = large;
    }
    
    const precio = parseFloat(precioElement);
    const cantidad = parseInt(cantidadElement.value);
    const subtotal = precio * cantidad;

    carrito.push({ nombreProducto, precio, cantidad, tamanio, subtotal });
    actualizarCarrito();
});

realizarCompraButton.addEventListener("click", () => {
    // Implementa la lógica para realizar la compra aquí
    // ...
    alert("Compra realizada con éxito. Gracias por tu compra.");
    carrito = [];
    actualizarCarrito();
});

function actualizarCarrito() {
    carritoListaElement.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nombreProducto} - Cantidad: ${item.cantidad} - Tamaño: ${item.tamanio} - Subtotal: $${item.subtotal}`;
        carritoListaElement.appendChild(li);
        total += item.subtotal;
    });

    totalElement.textContent = total.toFixed(2);
}
