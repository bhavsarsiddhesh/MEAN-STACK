let sum = (n1, n2) => {
    return n1 + n2;
}

let sub = (n1, n2) => {
    return n1 - n2;
}

let mul = (n1, n2) => {
    return n1 * n2;
}

let div = (n1, n2) => {
    if (n2 === 0) {
        console.log("Cannot Divide By 0");
    }
    else {
        return n1 / n2;
    }

}



module.exports = {
    sum,
    sub,
    mul,
    div
}