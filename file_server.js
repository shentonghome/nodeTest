var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.');

console.log('static root dir: ' + root);

var server = http.createServer(function (request,response) {
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);

    fs.stat(filepath,function(err,stats){
        if (!err && stats.isFile()) {
            fs.createReadStream(filepath).pipe(response);
        } else {
            response.writeHead(404);
            response.end('<h1>404 not found</h1>');
        }
    });
});

server.listen(8088);

console.log('Server is running at http://localhost:8088/');
