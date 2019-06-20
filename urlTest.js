var url = require('url');

var path = require('path');

console.log(url.parse('https://www.baidu.com/search?key=love'));

var workdir = path.resolve('./');
console.log(workdir);

var filePath = path.join(workdir,'pub');
console.log(filePath);
