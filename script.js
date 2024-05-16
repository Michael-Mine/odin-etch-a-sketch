const container = document.querySelector("#container");


for (let i = 0; i < 16; i ++) {

    for (let i = 0; i < 16; i ++) {
        let div = document.createElement("div");
        div.textContent = "Mine";
        container.appendChild(div);
    }
}

