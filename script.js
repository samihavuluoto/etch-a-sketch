
const masterContainer = document.querySelector("#masterContainer");

const button = document.querySelector("#resize");

button.addEventListener("click", resizeSquares);

function removeChildren(){
    const children = document.querySelectorAll("#masterContainer > div");
    children.forEach(element => element.remove());
}

function resizeSquares(){
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
        square.onmouseover = () => {
            switch(square.className) {
                case "":
                    square.className = "hover";
                    break;
                case "hover":
                    square.className = "hover2";
                    break;
                case "hover2":
                    square.className = "hover3";
                    break;
                case "hover3":
                    square.className = "hover4";
                    break;
                case "hover4":
                    square.className = "hover5";
                    break;
                case "hover5":
                    square.className = "hover6";
                    break;
                case "hover6":
                    square.className = "hover7";
                    break;
                case "hover7":
                    square.className = "hover8";
                    break;
                case "hover8":
                    square.className = "hover9";
                    break;
                case "hover9":
                    square.className = "hover10";
                    break;
                case "hover10":
                    break;
            }
        };
        masterContainer.appendChild(square);
    }
}