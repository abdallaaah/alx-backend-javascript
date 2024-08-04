#!/usr/bin/node
// small express server app

const express = require('express');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
})

app.listen(port, ()=>{
  console.log(`listening on ${port}`);
})


module.exports = app;