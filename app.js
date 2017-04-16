const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}))

let index = require("./routes/index");
let todo = require("./routes/todo");

app.use("/", index);
app.use("/todo", todo);

app.listen(3000, () => {
  console.log(`Live!`);
})
