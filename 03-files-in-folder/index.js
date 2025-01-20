const fs = require('fs');

let path = require('path');

let pathF = path.resolve(__dirname, 'secret-folder');

fs.readdir(pathF, (err, files) => {
  if (err) console.log(err);
  else {
    console.log('\nCurrent directory filenames:');
    files.forEach((file) => {
      let stats;

      let pathFile = path.resolve(__dirname, 'secret-folder', file);
      let ext = path.extname(file);

      fs.stat(pathFile, function (err, data) {
        if (err) {
          console.log(err);
        } else if (!data.isDirectory()) {
          stats = data.size.toString() + 'b';
          console.log(
            path.basename(pathFile, ext),
            '-',
            ext.slice(1),
            '-',
            stats,
          );
        }
      });
    });
  }
});