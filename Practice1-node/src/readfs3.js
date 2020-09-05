/*const fs = require("fs");

const promise = require("bluebird");
promise.promisifyAll(fs);

let readfiles = async () => {

    console.log("This is Async,Await");

    const path1 = "C:/Desktop/ReadFs.txt";
    const data1 = await fs.readFileAsync(path1, { encoding: "utf-8" });
    console.log(data1);

    const path2 = "C:/Desktop/ReadFs1.txt";
    const data2 = await fs.readFileAsync(path2, { encoding: "utf-8" });
    console.log(data2);

};

readfiles();*/

let hello = () => {
    for (let i = 0; i < 10; i++) {
        console.log("Synchronous")
    };
    console.log(10);
};

let hello1 = async () => {
    console.log("ASynchronous")

};


hello();
hello1();
