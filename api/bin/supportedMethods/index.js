const fs = require('fs');
const glob = require('glob');
const path = require('path');

const currentDirectory = path.resolve("./api/bin/supportedMethods");
const serviceMap = new Map();

let files = glob.sync("[!index.js]**.js", { cwd: currentDirectory });

for (let i = 0; i < files.length; i++) {
    if (files[i] == 'index.js') {
        continue;
    }
    serviceMap.set(files[i].replace(".js", ''), require(path.resolve(currentDirectory + "/" + files[i])).default);
}

exports.default = serviceMap;
