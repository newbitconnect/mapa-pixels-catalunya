const gridContainer = document.getElementById("grid");
const gridSize = 25; // Tamaño de cada celda (la mitad de la anterior)
const rows = 1000 / gridSize;
const cols = 1000 / gridSize;

// Limpiar el contenedor antes de generar la cuadrícula
gridContainer.innerHTML = "";

// Crear las nuevas celdas
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const cell = document.createElement("div");
        cell.style.position = "absolute";
        cell.style.width = `${gridSize}px`;
        cell.style.height = `${gridSize}px`;
        cell.style.left = `${col * gridSize}px`;
        cell.style.top = `${row * gridSize}px`;
        cell.style.border = "1px solid rgba(0,0,0,0.1)";
        cell.setAttribute("data-id", `cell-${row}-${col}`);
        cell.addEventListener("click", () => {
            cell.style.backgroundColor = "yellow"; // Marca la celda como seleccionada
            alert(`Has seleccionado la celda ${cell.getAttribute("data-id")}`);
        });
        gridContainer.appendChild(cell);
    }
}
