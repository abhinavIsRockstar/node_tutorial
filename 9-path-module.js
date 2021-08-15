const path = require('path');
console.log(path.sep);

const filePath = path.join('/content','subfolder','text.txt');
console.log(filePath,'filepath');

// to access the last path

const base = path.basename(filePath);
console.log(base,'base');

// that returns an absolute path

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute,'absolute'); 