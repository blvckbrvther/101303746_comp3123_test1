const fs = require("fs");
const { dirname } = require("path");

const dir = "./Logs";


if (fs.existsSync(dir)) {
  process.chdir(dir);
  fs.readdir(process.cwd(), (err, files) => {
    files.forEach((file) => {
      fs.unlink(file, (err) =>
        err
          ? console.error(`Error to delete file '${file}'`)
          : console.log( ` deleting files '${file}'`)
      );
    });
    fs.rmdir("./", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("directory deleted ");
      }
    });
  });
} else {
  fs.mkdirSync(dir);
  process.chdir(dir);

  for (let index = 0; index < 10; index++) {
    fs.writeFile(
      `newfile${index}.txt`,
      `  file ${index}` ,
      function (err) {
        if (err) throw err;
        console.log(`newfile ${index}.txt`);
      }
    );
  }
}
