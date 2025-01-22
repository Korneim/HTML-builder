const fs = require('fs');
const path = require('path');

let source = path.resolve(__dirname, 'files');
let destination = path.resolve(__dirname, 'files-copy');

function copyFiles(sourse, destination) {
  fs.rm(destination, { recursive: true }, (err) => {
    fs.mkdir(destination, (err) => {
      if (err) console.log('rerere', err);
    });
    fs.readdir(source, (err, files) => {
      files.forEach((file) => {
        fs.copyFile(source + '/' + file, destination + '/' + file, () => {});
      });
    });
  });
}
copyFiles(source, destination);