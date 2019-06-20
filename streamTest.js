var fs = require('fs');

var rs = fs.createReadStream('README.md','utf-8');

rs.on('data',function (chunk) {
    console.log('DATA: ');
    console.log(chunk);
    
});

rs.on('open',function () {
    console.log('OPEN');
});

rs.on('end',function () {
    console.log('END');
});

rs.on('error',function(err) {
    console.error('ERROR: '+err);
});

var ws = fs.createWriteStream('writeFile.md',{'flags':'a'},'utf-8');
ws.write('\nThis is from stream\n');
// ws.end();

rs.pipe(ws);