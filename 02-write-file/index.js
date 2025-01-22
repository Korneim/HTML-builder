const fs = require('fs');
const readline = require('readline');

let path = require('path');
const {createWriteStream} = require("node:fs");


path = path.resolve(__dirname, 'test.txt');
let wr = createWriteStream(path);

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Запись в файл строки :>');

rl.prompt();

rl.on('line', function (answer) {
  if (answer.trim() === 'exit') rl.close();
  wr.write(answer + '\n');
  rl.prompt();
}).on('close', function () {
  console.log('файл записан');
  process.exit(0);
});