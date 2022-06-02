function newRandomsnow() {
    return {
        x: randomInt(0, cnv.width),
        y: 0,
        r: randomInt(10, 20),
        color: "white",
        v: randomInt(1, 15)
    }
}

// Gloabal Array
let array = [];

// Create and Return Array
function snowflakeArray(total) {
    for (let n = 1; n <= total; n++) {
        array.push(newRandomsnow());
    }
    return array;
}

function drawsnow(snflake) {
    fill("#C4A484");
    circle(snflake.x, snflake.y, snflake.r, "fill");
   
}

function movesnow(snflake) {
    if (snflake.y > cnv.height) {
        snflake.y = 0;
        snflake.x = randomInt(0, cnv.width)
    }
    snflake.y += snflake.v;
}
