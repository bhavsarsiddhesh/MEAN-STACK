const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let DBS_CONFIG = {
    host: "localhost",
    user: "root",
    password: "siddhesh",
    database: "Node"
};


let addRecord = async () => {
    //creating Connection 
    const Connection = mysql.createConnection(DBS_CONFIG);

    // Opening the call
    await Connection.connectAsync();

    // Query 
    let sql = "INSERT INTO Userr (ID,USERNAME,PASSSWORD,MOBILE) VALUES(?,?,?,?)";
    let result = await Connection.queryAsync(sql, [7, "Ravi", "963258748", 852146976]);

    await Connection.endAsync();

    return result;

};

addRecord();