const fs = require('fs');

let path = require('path');

path = path.resolve(__dirname, 'text.txt');
fs.readFile(path, function (err, data) {
  if (err) {
    console.error(err);
  }
  console.log(data.toString());
});