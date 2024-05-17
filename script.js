const container = document.querySelector("#container");

let gridsLength = 16;

for (let i = 0; i < gridsLength; i ++) {
    for (let i = 0; i < gridsLength; i ++) {
        let div = document.createElement("div");
        container.appendChild(div);
    }
}

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
    gridsLength = prompt("How many squares per side (maximum 100)?");
})

