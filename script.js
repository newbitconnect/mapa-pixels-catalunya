// Script para manejar la selección de píxeles
document.querySelectorAll("rect").forEach((pixel) => {
    pixel.addEventListener("click", () => {
        // Cambiar color para mostrar que está seleccionado
        pixel.setAttribute("fill", "yellow");

        // Mostrar ventana para comprar el píxel
        const id = pixel.getAttribute("id");
        const confirmacion = confirm(`¿Quieres comprar el píxel ${id}?`);
        if (confirmacion) {
            // Aquí conectaríamos con el sistema de pago
            alert(`¡Has comprado el píxel ${id}!`);
            pixel.setAttribute("fill", "blue");
        } else {
            pixel.setAttribute("fill", "white");
        }
    });
});

