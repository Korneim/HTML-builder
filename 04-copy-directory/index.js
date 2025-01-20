const fs = require('fs');
const path = require('path');

let source = path.resolve(__dirname, 'files');
let destination = path.resolve(__dirname, 'files-copy');

let copyDir = function (source, destination) {
  fs.stat(source, function (err) {
    if (err) throw err;

    fs.mkdir(
      destination,
      {
        recursive: true,
      },
      (err) => {
        if (err) throw err;
      },
    );

    fs.readdir(destination, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(destination, file), (err) => {
          if (err) throw err;
        });
      }
    });

    fs.readdir(source, (err, files) => {
      if (err) throw err;
      files.forEach((item) => {
        fs.copyFile(source + '/' + item, destination + '/' + item, (err) => {
          if (err) throw err;
        });
      });
    });
  });
  console.log('файлы скопированы');
};

copyDir(source, destination);