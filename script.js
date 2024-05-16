const container = document.querySelector("#container");

let gridsLength = 16;

let button = document.createElement("button");

button.textContent = "Click for new Etch-A-Sketch";
container.appendChild(button);

button.addEventListener("click", () => {
    gridsLength = prompt("How many squares per side?");
})

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

