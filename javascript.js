
const submitButton = document.getElementById("submit-button");
const inputField = document.getElementById("grid-size");

const gridContainer = document.querySelector(".grid-container");

const colorPicker = document.getElementById("color-picker");
const clearButton = document.getElementById("clear-button");


function createGrid(size) {
    if (size > 100) size = 100;
    if (size < 1) size = 1;
    // FORMULA FOR CALCULATING CHILDREN SIZE BASED ON NUMBERS 
    const totalSize = size * size;
    const percentage = 100 / size;
    gridContainer.replaceChildren();

    for (let i = 0; i < totalSize; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.setAttribute("style", `height: ${percentage}%; width: ${percentage}%;`);
        gridSquare.addEventListener("mouseenter", () => {
            gridSquare.style.backgroundColor = chosenColor;
            clearButton.classList.toggle("state", true);
        })
        gridContainer.appendChild(gridSquare);
    }

}

let chosenColor = "red";

colorPicker.addEventListener("input", () => {
    chosenColor = colorPicker.value;
    console.log(chosenColor);
})

submitButton.addEventListener("click", () => {
    const size = inputField.value;
    createGrid(size);
});

clearButton.addEventListener("click", () => {
    const size = inputField.value;
    createGrid(size);
    clearButton.classList.toggle("state", false);
});


createGrid(16);
