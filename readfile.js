var fs = require('fs');

fs.readFile('README.md',function (err,data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString().length);
    }
});
try {
    
    var data = fs.readFileSync('README.md','UTF8');
    console.info('from sync:\n'+data);
} catch (error) {
    console.log(error);
    
}

fs.appendFile('writeFile.md',data,function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('write ok');
    }
});

fs.stat('writeFile.md',function(err,stat) {
    if (!err) {
        console.log('======');
        
        console.log(stat.isFile());
        console.log(stat.birthtime);
        
        console.log('======');
    
    }
});

