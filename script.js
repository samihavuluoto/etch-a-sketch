const masterContainer = document.querySelector("#masterContainer");
let grid = 16 * 16;

// Relative size for a square in comparison to the masterContainer. Multiplication by 100 to get a percentage.
let size = 1 / 16 * 100;

for (let i = 0; i < grid ; i++){
    const square = document.createElement("div");
    square.style.height = size + "%";
    square.style.width = size + "%";
    square.style.flex = "auto";
    square.style.flexShrink = 0;
    square.style.margin = "0px";
    square.onmouseover = () => square.classList.add("hover");
    masterContainer.appendChild(square);
}