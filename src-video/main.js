var fs = require('fs');
var fin = {};
var root = "videos/"
var current_root = "files/"
var dirs = fs.readdirSync(root);


for (var x = 0; x < dirs.length; x++) {
    try {
        var category = dirs[x];
        if(category.indexOf('DS_Store') > -1) continue;
        console.log(category);

        var type, type_en;
        if(category.split("-").length < 3) {
            type = category.split("-")[0].trim();
            type_en = category.split("-")[1].trim();
        } else {
            // 有顺序需求，还不要显示数字
            type = category.split("-")[1].trim();
            type_en = category.split("-")[2].trim();
        }
      
        var localRoot = root + category + "/";
        var localDirs = fs.readdirSync(localRoot);
        // console.log(localRoot);
        for (var i = 0; i < localDirs.length; i++) {
            try {
                if(localDirs[i].indexOf('DS_Store') > -1) continue;
                // var caseCN = localDirs[i].split("-")[0].trim();
                // var caseEN = localDirs[i].split("-")[1].trim();

                var caseCN, caseEN;
                console.log(category.split("-"));
                if(category.split("-").length < 3) {
                    caseCN = localDirs[i].split("-")[0].trim();
                    caseEN = localDirs[i].split("-")[1].trim();
                } else {
                    // 有顺序需求，还不要显示数字
                    caseCN = localDirs[i].split("-")[1].trim();
                    caseEN = localDirs[i].split("-")[2].trim();
                }
              
                fin[type] = fin[type] || {
                    cases: [],
                    title: type,
                    num: category.split("-")[0] || 0,
                    // title: "AI + " + type,
                    subtitle: type_en,
                    back: Math.random() > 0.5,
                    offset: Math.floor(Math.random() * 3)
                };
             
               
                fin[type].cases.push(my)
                var files = fs.readdirSync(localRoot + localDirs[i]);
                for (var q = 0; q < files.length; q++) {
                    var f = files[q];
                    var path = localRoot + localDirs[i] + "/" + f;
                    var j = null;
                    if (f.toLowerCase().endsWith(".mp4") || f.toLowerCase().endsWith(".mov") || f.toLowerCase().endsWith(".webm")) {
                        j = {
                            type: 'video',
                            path: path.split('dist/')[1],
                            file: f,
                            name: f.replace(/\.webm|\.mp4|\.mov/ig, "")
                        };
                    } else if (f.toLowerCase().endsWith(".jpeg") ||
                        f.toLowerCase().endsWith(".gif") ||
                        f.toLowerCase().endsWith(".png") ||
                        f.toLowerCase().endsWith(".jpg")) {
                        j = {
                            type: 'image',
                            path: path.split('dist/')[1],
                            file: f,
                            name: f.replace(/\.png|\.jpg|\.jpeg|\.gif/ig, "")
                        };
                    } else if (fs.statSync(path).isDirectory()) {
                        j = {
                            type: 'deck',
                            path: path.split('dist/')[1],
                            file: f,
                            name: f,
                            content: fs.readdirSync(path).filter((v) => {
                                return v.toLowerCase().endsWith("png") ||
                                    v.toLowerCase().endsWith("jpg") ||
                                    v.toLowerCase().endsWith("jpeg")
                            }),
                        };
                        if (j.content.length == 0) {
                            j = null;
                        }
                    }
                    if (j) {
                        j.id = id++;
                        my.items.push(j);
                    }
                }
            } catch (e) {
                console.error("Skipping adding", localDirs[i]);
                console.error(e);
            }
        }
    } catch (e) {
        console.error("Skipping adding", dirs[x]);
        console.error(e);
    }
}