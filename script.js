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
document.querySelectorAll("rect").forEach((pixel) => {
    pixel.addEventListener("click", () => {
        // Cambiar color para mostrar que está seleccionado
        pixel.setAttribute("fill", "yellow");

        // Confirmar selección del píxel
        const id = pixel.getAttribute("id");
        const confirmacion = confirm(`¿Quieres comprar el píxel ${id}?`);
        if (confirmacion) {
            // Obtener el contenedor del botón de pago
            const paymentContainer = document.getElementById("payment-container");

            // Limpiar botones previos
            paymentContainer.innerHTML = "";

            // Crear el formulario de PayPal
            const paymentForm = `
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_xclick">
                    <input type="hidden" name="business" value="tu-email@paypal.com">
                    <input type="hidden" name="item_name" value="Píxel ${id}">
                    <input type="hidden" name="amount" value="1.00">
                    <input type="hidden" name="currency_code" value="EUR">
                    <input type="submit" value="Comprar Píxel ${id}">
                </form>
            `;

            // Añadir el botón al contenedor
            paymentContainer.innerHTML = paymentForm;

            // Cambiar el píxel a color azul tras la compra (opcional, manual)
            alert(`¡Has comprado el píxel ${id}!`);
            pixel.setAttribute("fill", "blue");
        } else {
            pixel.setAttribute("fill", "white");
        }
    });
});
