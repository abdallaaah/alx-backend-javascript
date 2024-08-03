#!/usr/bin/node
// Test reading database

const fs = require('fs');
const http = require('http');
const url = require('url');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }
    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];
      if (!Object.keys(studentGroups).includes(field)) {
        studentGroups[field] = [];
      }
      const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0);
    const result = { "Number of students": totalStudents };

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      result[`Number of students in ${field}`] = `${group.length}. List: ${studentNames}`;
    }

    resolve(result);
  });
});

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;

  if (reqUrl === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    var responseParts = ['This is the list of our students'];
    countStudents(process.argv[2])
      .then((data) => {
        responseParts.push(`Number of students: ${data["Number of students"]}`)
        for (const [key, value] of Object.entries(data)){
          if (key !== "Number of students")
          responseParts.push(`${key}: ${value}`)
        }
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
      })
      .catch((error) => {
        if (error instanceof Error){
          var final_error = error.message.toString()
          responseParts.push(final_error)
        }
          var final_repsone = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', final_repsone.length);
          res.statusCode = 200;
          res.write(Buffer.from(final_repsone))
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
