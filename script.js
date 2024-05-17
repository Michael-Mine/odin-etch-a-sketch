const container = document.querySelector("#container");

function newSketch(gridsLength = 16, gridSize = "62.5px") {

    for (let i = 0; i < gridsLength; i ++) {
        for (let i = 0; i < gridsLength; i ++) {
            let div = document.createElement("div");
            div.style.height = gridSize
            div.style.width = gridSize
            container.appendChild(div);
        }
    }
}

newSketch();

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "green";

    })
})
const button = document.querySelector("#button");

let button1 = document.createElement("button");
button1.textContent = "Click for new Etch-A-Sketch";
button.appendChild(button1);

button1.addEventListener("click", () => {
    gridsLength = prompt("How many squares per side (maximum 100?");
})

