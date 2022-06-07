let snowflakeObjects = {
    x: randomInt(0, cnv.width),
    y: 0,
    w: randomInt(10, 20),
    h: randomInt(10, 20),
    color: "white",
    v: randomInt(1, 5)
}

// Gloabal Array
let array = [];

// Create and Return Array
function snowflakeArray(total) {
    for (let n = 1; n <= total; n++) {
        array.push(snowflakeObjects);
    }
    return array;
}

function drawsnow(snflake) {
    fill("#C4A484");
    rect(snflake.x, snflake.y, snflake.w, snflake.h, "fill");

}

function movesnow(snflake) {
    if (snflake.y > cnv.height) {
        snflake.y = 0;
        snflake.x = randomInt(0, cnv.width)
    }
    snflake.y += snflake.v;
}