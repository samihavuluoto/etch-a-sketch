
const masterContainer = document.querySelector("#masterContainer");

const button = document.querySelector("#resize");

button.addEventListener("click", resizeSquares);

function removeChildren(){
    const children = document.querySelectorAll("#masterContainer > div");
    children.forEach(element => element.remove());
}

function randomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}


function resizeSquares() {
    let b = prompt("How many rows of squares would you like?");
    
    let a = b > 100 ? 100 : b;

    removeChildren()

    let grid = a * a;

    // Relative size for a square in comparison to the masterContainer. Multiplication by 100 to get a percentage.
    let size = 1 / a * 100;

    for (let i = 0; i < grid ; i++){
        const square = document.createElement("div");
        square.style.height = size + "%";
        square.style.width = size + "%";
        square.style.flex = "auto";
        square.style.flexShrink = 0;
        square.style.margin = "0px";
        let c = randomColor();
        square.onmouseover = () => square.style.backgroundColor = c;
        masterContainer.appendChild(square);
    }
}