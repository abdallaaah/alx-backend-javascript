#!/usr/bin/node
// Create a small HTTP server using Node.js test

const app = require('http');

app.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);

module.exports = app