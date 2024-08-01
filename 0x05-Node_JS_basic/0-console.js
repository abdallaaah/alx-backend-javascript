#!/usr/bin/node
// function to simple write on the stdout

function displayMessage(message){
    process.stdout.write(message.toString() + '\n')
}
module.exports = displayMessage;
