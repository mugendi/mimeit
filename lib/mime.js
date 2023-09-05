const mime = require('mime-type/with-db');
const fs = require('fs');
const path = require("path");

const dirName = path.join(__dirname, "types");
let files = fs.readdirSync(dirName)
.map(f=>path.join(dirName, f))
.map(require);

let types = {},type

for (let o of files) {
    for (let ext in o) {
        //if type unkown or hasn't been encountered here
        if (!types[ext] && !mime.types[ext]) {
            
            type = o[ext];
            
            //add
            types[ext] = type;
            mime.types[ext] = type;

            if (!mime[type]) {
                mime[type] = {
                    source: 'custom',
                    compressible: true,
                    extensions: []
                }
            }


            mime[type].extensions.push(ext)

        }
    }
}


console.log(Object.keys(types).length, "extensions added!")




module.exports = mime