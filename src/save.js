const YAML = require('json-to-pretty-yaml');
const fs = require('fs');
var data = [
    {
        name: 'test1',
        age: 18
    },
    {
        name: 'test2',
        age: 18
    },
    {
        name: 'test3',
        age: 18
    },
    {
        name: 'test4',
        age: 18
    },
]
// json 转换 yaml
const yaml_data = YAML.stringify(data);
fs.writeFile("content/ctx.yaml", yaml_data, function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log("----------新增成功-------------");
});

var str = JSON.stringify(data);
fs.writeFile("content/ctx.json", str, function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log("----------新增成功-------------");
});