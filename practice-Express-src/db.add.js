const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let db_config = require("./db.config");

let Adduser = async () => {

    const Connection = mysql.createConnection(db_config.DB_CONFIG);

    await Connection.connectAsync();

    let sql = "INSERT INTO Userr (ID,USERNAME,PASSSWORD,MOBILE) VALUES (?,?,?,?)";

    let result = await Connection.queryAsync(sql, [4, "Soham", "7859644", "1597536042"]);

    await Connection.endAsync();

    return result;


};


let Adduserpara = async (id, username, pasword, mobile) => {

    const Connection = mysql.createConnection(db_config.DB_CONFIG);

    await Connection.connectAsync();

    let sql = "INSERT INTO Userr (ID,USERNAME,PASSSWORD,MOBILE) VALUES (?,?,?,?)";

    let result = await Connection.queryAsync(sql, [id, username, pasword, mobile]);

    await Connection.endAsync();

    return result;


};


module.exports = { Adduser, Adduserpara };