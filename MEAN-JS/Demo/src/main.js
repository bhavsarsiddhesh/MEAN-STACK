const mod1 = require("./Module/mod1");
const mod2 = require("./Module/mod2");
//console.log(mod1);

console.log(mod1.str);
console.log(mod1.city);
console.log(mod1.Max);

let Sum = mod2.sum(1, 2);
let Sub = mod2.sub(1, 2);
let Mul = mod2.mul(2, 2);
let Div = mod2.div(2, 0);

console.log(Sum);

console.log(Sub);

console.log(Mul);
console.log(Div);





