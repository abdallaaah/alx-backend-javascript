#!/usr/bin/node
// Create a small HTTP server using Node.js test

const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});   
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);

module.exports = app;