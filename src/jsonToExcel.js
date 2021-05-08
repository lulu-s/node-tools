const json2xls = require('json2xls'); // json to excel
const fs = require('fs');
const YAML = require('yaml')

var data = YAML.parse(fs.readFileSync('content/ctx.yaml', 'utf8'))

var xls = json2xls(data);

fs.writeFileSync('excel/data.xlsx', xls, 'binary');