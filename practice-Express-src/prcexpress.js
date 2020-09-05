const express = require("express");

// Creating Instance of Express
const app = express();


// Using Get Method :: "/" this is a Path parameter
app.get("/", (req, res) => {

});

app.get("/search", (req, res) => {
    const id = req.query.id;
    const urnm = req.query.urnm;

    const json = { id: 1, title: "Black Panther" };
    res.json(json);
});


//Creating A server with port 
app.listen(3001);
