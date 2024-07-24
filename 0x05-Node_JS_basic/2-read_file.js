#!/usr/bin/node

const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        const students = lines.slice(1).map(line => {
            const [firstname, , , field] = line.split(',');
            return { firstname, field };
        }).filter(student => student.firstname && student.field);

        const totalStudents = students.length;
        console.log(`Number of students: ${totalStudents}`);

        const fields = {};
        students.forEach(student => {
            if (!fields[student.field]) {
                fields[student.field] = [];
            }
            fields[student.field].push(student.firstname);
        });

        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;
