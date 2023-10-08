const abrirCarritoButton = document.getElementById("abrirCarrito");
const modalCarrito = document.getElementById("modalCarrito");
const cerrarCarritoButton = document.getElementById("cerrarCarrito");

// Abre el modal al hacer clic en el botón "Abrir Carrito"
abrirCarritoButton.addEventListener("click", () => {
    modalCarrito.style.display = "block";
});

// Cierra el modal al hacer clic en el botón "Cerrar" (X)
cerrarCarritoButton.addEventListener("click", () => {
    modalCarrito.style.display = "none";
});

// Cierra el modal si el usuario hace clic fuera de él
window.addEventListener("click", (event) => {
    if (event.target == modalCarrito) {
        modalCarrito.style.display = "none";
    }
});
