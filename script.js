// Script para manejar la selección de píxeles
document.querySelectorAll("rect").forEach((pixel) => {
    pixel.addEventListener("click", () => {
        // Cambiar color para mostrar que está seleccionado
        pixel.setAttribute("fill", "yellow");

        // Confirmar la compra del píxel
        const id = pixel.getAttribute("id");
        const confirmacion = confirm(`¿Quieres comprar el píxel ${id}?`);
        if (confirmacion) {
            // Marcar el píxel como comprado
            pixel.setAttribute("fill", "blue");
            alert(`¡Has comprado el píxel ${id}!`);
        } else {
            pixel.setAttribute("fill", "white");
        }
    });
});
