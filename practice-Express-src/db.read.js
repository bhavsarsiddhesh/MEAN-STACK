const Promise = require("bluebird");
const mysql = require("mysql");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = require('./db.config');

let readuser = async () => {
    const Connection = mysql.createConnection(db_config.DB_CONFIG);

    await Connection.connectAsync();

    let sql = "SELECT * FROM Userr";
    let result = await Connection.queryAsync(sql);

    await Connection.endAsync();

    await console.log(result);

    return result;

};

let readuserpara = async (Userr) => {
    const Connection = mysql.createConnection(db_config.DB_CONFIG);

    await Connection.connectAsync();

    let sql = "SELECT * FROM Userr WHERE ID=? AND USERNAME=?";
    let result = await Connection.queryAsync(sql, [Userr.ID, Userr.USERNAME]);

    await Connection.endAsync();

    console.log(result);

    return result;

};



module.exports = { readuser, readuserpara };