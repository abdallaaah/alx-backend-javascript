#!/usr/bin/node
// take input from user

process.stdout.write("Welcome to Holberton School, what is your name?\n")
process.stdin.on('data', data => {
    console.log(`Your name is: ${data}`)
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });



