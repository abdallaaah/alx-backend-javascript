#!/usr/bin/node
// make a complex server

const express = require('express');
const app = express();
const fs = require('fs');
const port = 1245;

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
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
      const responseParts = ['This is the list of our students'];
      responseParts.push(`Number of students: ${totalStudents}`);

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        responseParts.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      
      resolve(responseParts);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const pathName = process.argv[2];
  countStudents(pathName)
    .then((data) => {
      const responseText = data.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send(responseText);
    })
    .catch((error) => {
      const errorList = ['This is the list of our students', error.message];
      const responseText = errorList.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send(responseText); // Changed status code to 500 for error response
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
