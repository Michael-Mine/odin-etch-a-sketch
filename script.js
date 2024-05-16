const container = document.querySelector("#container");

for (let i = 0; i < 16; i ++) {
    for (let i = 0; i < 16; i ++) {
        let div = document.createElement("div");
        div.textContent = "Mine";
        container.appendChild(div);
    }
}

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "green";
        console.log("hit");
    })
})