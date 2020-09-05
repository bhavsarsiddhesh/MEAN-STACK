console.log("Hello")
const fs = require("fs");

let readfile = () => {
    const path = "C:/Desktop/ReadFs.txt";
    const readfiles = fs.readFileSync(path, { encoding: "utf-8" });
    console.log(readfiles);
};

readfile();
