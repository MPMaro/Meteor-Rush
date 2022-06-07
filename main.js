// Setup Canvas 

canvasSize(1000, 800)
let snow = snowflakeArray(1);

let state = "startGame"

requestAnimationFrame(draw);

function draw() {

    if (state === "startGame") {
        startGame();
    } else if (state === "runGame") {
        runGame();
    } else if (state === "gameover"){
        gameOver();
    }


    requestAnimationFrame(draw);
}

// Add Snow Every 
setInterval(addSnow, 6000  );

function addSnow() {
    array.push(snowflakeObjects);
}

function runGame() {
    // player();

    background("white");
    for (let i = 0; i < snow.length; i++) {
        drawsnow(snow[i]);
        movesnow(snow[i]);
        checkCollisons();

    }

    drawPlayer();
    
}

let player = {
    x: 100,
    y: 100,
    w: 20,
    h: 25,
    v: 10
}

function drawPlayer() {
    stroke("black");
    rect(player.x, player.y, player.w, player.h, "stroke")
    if (player.x >= 980){
        player.x = 977
    } else if(player.x <= 0){
        player.x = 1
     }  else if(player.y <= 0) {
         player.y = 0.5
     } else if (player.y >= 775){
         player.y = 765
     }


}

function movePlayer(event) {
    if (event.keyCode == 87) {
        player.y -= player.v;
    } else if (event.keyCode == 83) {
        player.y += player.v;
    } else if (event.keyCode == 65) {
        player.x -= player.v;
    } else if (event.keyCode == 68) {
        player.x += player.v
    }

}

function startGame() {
    background("black");
    fill("white");
    font("50px Arial");
    text("Click to Start", 350, 400, "fill");
}


addEventListener("mousedown", mouseDownHandler)
addEventListener("keydown", movePlayer);

function mouseDownHandler() {
    if (state === "startGame") {
        state = "runGame"
    }
}

function gameOver (){
    background("red")
    fill("white")
    font("50px Arial");
    text("DAm", 350, 400, "fill");
    setInterval(reset,2000)
 

}

function checkCollisons(){
    if (rectCollide(player, snowflakeObjects)) {
        state = "gameover"
    }
}


function reset(){
 location.reload()
}