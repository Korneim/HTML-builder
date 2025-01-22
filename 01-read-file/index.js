const fs = require('fs');

let path = require('path');
path = path.resolve(__dirname, 'text.txt');

let stream = fs.createReadStream(path);

stream.on('data', data =>{
  console.log(data.toString());
});