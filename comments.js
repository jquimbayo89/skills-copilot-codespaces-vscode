// Create web server
// Run: node comments.js
// Open browser: http://localhost:3000

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = [];

// Create server
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        var filePath = path.join(__dirname, 'index.html');
        var fileContent = fs.readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fileContent);
    } else if (pathname == '/submit') {
        var comment = urlObj.query.comment;
        comments.push(comment);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Comment added');
    }
}).listen(3000, function() {
    console.log('Server is listening on port 3000');
});