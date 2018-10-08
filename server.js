"use strict";
const express = require("express");
const app = express();

app.use(express.static("./public"));
app.use(express.json());

let port = process.env.PORT || 8900;

app.listen(port, () => {
    console.log(`Server running on port: ${port}.`);
});