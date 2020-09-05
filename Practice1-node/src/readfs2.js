const fs = require("fs");

let readfiles = () => {
    const path = "C:/Desktop/ReadFs.txt";
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
        console.log(data);
        console.log(err);
    });
};

readfiles();