// Setup Canvas 

canvasSize(1000,800)
let snow = snowflakeArray(1);

requestAnimationFrame(draw);

function draw() {
    
    background("white");
    for (let i = 0; i < snow.length; i++) {
        drawsnow(snow[i]);
        movesnow(snow[i]);
    }
    stroke("red");
    circle(mouseX, mouseY, 10, "stroke");

  
    requestAnimationFrame(draw);
}

setInterval(addSnow(),100);

function addSnow() {
    array.push(newRandomsnow());
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


function circleCollide(circle1, circle2) {
    return dist(circle1.x, circle1.y, circle2.x, circle2.y) < (circle1.r + circle2.r);
  }

  