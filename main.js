// Setup Canvas 
let cnv = document.getElementById("canvasEl");
let ctx = cnv.getContext("2d");
cnv.width = 1010;
cnv.height = 1000;

let snow = snowflakeArray(1);

requestAnimationFrame(draw);

function draw() {
    
    background("white");
    for (let i = 0; i < snow.length; i++) {
        drawsnow(snow[i]);
        movesnow(snow[i]);
    }
    requestAnimationFrame(draw);
}

// Key Press 
document.addEventListener("keydown", keyDownHandler);

// Add and remove Snowfalkes
function keyDownHandler(event) {
    if (event.keyCode === 38) {
        addSnow();
    } else if (event.keyCode === 40) {
        array.pop();
    }
}

function addSnow() {
    array.push(newRandomsnow());
}