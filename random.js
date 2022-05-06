// Random functions

function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
