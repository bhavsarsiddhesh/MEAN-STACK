const Http = require("http");
const mod = require("./my.list");

Http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    const responses = JSON.stringify(mod.list);
    res.end(responses);
}).listen(5500);
