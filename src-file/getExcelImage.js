// 获取excel中的图片

const ExcelJS = require('exceljs');
const fs = require('fs');
const workbook = new ExcelJS.Workbook();


async function init() {
    const data = await workbook.xlsx.readFile('./data.xlsx');
    
    console.log( workbook.worksheets.length);
    for(let i = 0; i < workbook.worksheets.length; i++){
        const worksheet = workbook.worksheets[i];
        for (const image of worksheet.getImages()) {
            // console.log('processing image row', image.range.tl.nativeRow, 'col', image.range.tl.nativeCol, 'imageId', image.imageId);
            // fetch the media item with the data (it seems the imageId matches up with m.index?)
            const img = workbook.model.media.find(m => m.index === image.imageId);
            fs.writeFileSync(`No${i + 1}.${image.range.tl.nativeRow}.${image.range.tl.nativeCol}.${img.name}.gif`, img.buffer);
    
            // console.log(`${image.range.tl.nativeRow}.${image.range.tl.nativeCol}.${img.name}.gif`);
        }
    }
  
}


init();