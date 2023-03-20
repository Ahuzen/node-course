const path = require('path');

console.log(path.join('/public', 'dist'));

const filePath = path.join('/public', 'dist')

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve('dist'));