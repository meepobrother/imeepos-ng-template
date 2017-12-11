var fs = require('fs');

var packageJson = require('../package.json');
if (!packageJson) {
    throw new Error('Can\'t find package json');
}

delete packageJson.devDependencies;
delete packageJson.scripts;
delete packageJson.repository;
delete packageJson.homepage;
delete packageJson.bugs;

packageJson.main = './src/index.js';
packageJson.typings = './src/index.d.ts';


fs.writeFile('./dist/package.json', JSON.stringify(packageJson, null, 2), () => {
    console.log('执行完毕');
});