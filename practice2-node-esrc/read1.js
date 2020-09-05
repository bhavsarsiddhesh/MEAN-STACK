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

let readUser = async () => {
    // Creating Connection
    let Connection = mysql.createConnection(DBS_CONFIG);

    // Opening the connection 
    await Connection.connectAsync();

    // query 
    let sql = "SELECT * FROM Userr WHERE ID=?";
    let result = await Connection.queryAsync(sql, [3]);

    // send the request
    Connection.end();
    console.log(result)
    return result;

};

let readUserbypara = async (ID, USERNAME) => {
    // Creating Connection
    let Connection = mysql.createConnection(DBS_CONFIG);

    // Opening the connection 
    await Connection.connectAsync();

    // query 
    let sql = "SELECT * FROM Userr WHERE ID=? AND USERNAME=?";
    let result = await Connection.queryAsync(sql, [ID, USERNAME]);

    // send the request
    Connection.end();
    console.log(result)
    return result;

};


//readUser();
readUserbypara();