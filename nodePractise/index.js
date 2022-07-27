// console.log("Wassup")
// console.log(__dirname)
// console.log(__filename)

// console.log(__dirname);
// console.log(__filename);
const os = require('os');
// const path = require('path')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// let sum = require("./app")

// console.log(sum(5,6))

const file = require("fs");
const path = require("path");

// write to file
// file.writeFile(path.join(__dirname, "./data.txt"), "Writing again", async (err) => {
//   if (err) throw err;
//   console.log("Writing to a file");
// });

// read from file
file.readFile("./data.txt", "utf8",  (err, data) => {
  if (err) throw err;
  console.log(data);
});



// Append a content to a file-
// file.appendFile(path.join(__dirname,'./data.txt'), '\nnew contents', async (err)=> {
//     if(err) throw err;
//     console.log('Append a content to a file');
// });