function calculateCellSize(numOfCells) {
    return 360 / numOfCells;
}

const container = document.querySelector(".grid-container");
const slider = document.querySelector("#inputSlider");
const sliderDisplay = document.querySelector("#gridSizeDisplay");
const colorPicker = document.querySelector("#colorPicker");
const clearGridBtn = document.querySelector("#gridClear");

let selectedColor = colorPicker.value;

colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
});

function createGrid(numOfCells) {
    container.innerHTML = "";
    const cellSize = calculateCellSize(numOfCells);

    for (let i = 0; i < numOfCells * numOfCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;

    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = selectedColor;
    });

    container.appendChild(cell);
    }
}

// Initialize grid
createGrid(parseInt(slider.value, 10));

// Slider input handler
slider.addEventListener("input", () => {
    const gridSize = parseInt(slider.value, 10);
    sliderDisplay.textContent = gridSize;
    createGrid(gridSize);
});

// Clear grid handler
clearGridBtn.addEventListener("click", () => {
    for (const cell of container.children) {
    cell.style.backgroundColor = "white";
    }
});