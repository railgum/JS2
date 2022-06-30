const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use("/", express.static("./public"));

app.listen(5555, () => {
  console.log("Server started!");
});