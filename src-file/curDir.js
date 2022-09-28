const fs = require("fs");

// 获取当前文件夹下的所有文件
var readDir = fs.readdirSync("../src/");
console.log(readDir);



