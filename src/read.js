const fs = require('fs');

// 读取 yaml
const YAML = require('yaml')
const yaml_data = YAML.parse(fs.readFileSync('content/ctx.yaml', 'utf8'))
console.log(yaml_data)


// 读取 excel
const excelToJson = require("convert-excel-to-json");
const excel_data = excelToJson({
    sourceFile: "./excel/test.xlsx",
})
console.log(excel_data)
