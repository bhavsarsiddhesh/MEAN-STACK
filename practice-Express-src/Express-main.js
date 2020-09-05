const Promise = require("bluebird");
const mysql = require("mysql");
const cors = require("cors");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
//const cors = require("cors");
//app.use(cors());


let db_config = require("./db.config");

const dbadd = require("./db.add");
const dbread = require("./db.read");
const Connection = require("mysql/lib/Connection");

app.get("/adduser", async (req, res) => {
    try {
        const id = req.query.id;
        const username = req.query.username;
        const password = req.query.password;
        const mobile = req.query.mobile;

        const Connection = mysql.createConnection(db_config.DB_CONFIG);

        await Connection.connectAsync();

        let sql = "INSERT INTO Userr (ID,USERNAME,PASSSWORD,MOBILE) VALUES (?,?,?,?)";
        await Connection.queryAsync(sql, [id, username, password, mobile]);

        await Connection.endAsync();

        const json = { message: "Successful" };
        res.json(json);
    } catch (err) {
        const json = { message: "Error" };
        res.json(json);
    }
});





app.get("/alluser", async (req, res) => {
    try {
        const results = await dbread.readuser();

        res.json(results);
    } catch (err) {
        const json = { message: "Failure" };
        res.json(json);
    }
});


app.listen(3002);