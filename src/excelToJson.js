const excelToJson = require("convert-excel-to-json");

const data = excelToJson({
    sourceFile: "./excel/test.xlsx",
})

const fs = require("fs");


var str = JSON.stringify(data);
fs.writeFile("content/excelToJson.json", str, function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log("----------新增成功-------------");
});

