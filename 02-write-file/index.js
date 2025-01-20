const fs = require('fs');
const readline = require('readline');

let path = require('path');

path = path.resolve(__dirname, 'test.txt');

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Запись в файл строки :>');

rl.prompt();

rl.on('line', function (answer) {
  if (answer.trim() === 'exit') rl.close();
  fs.appendFileSync(path, answer + '\n');
  rl.prompt();
}).on('close', function () {
  console.log('файл записан');
  process.exit(0);
});