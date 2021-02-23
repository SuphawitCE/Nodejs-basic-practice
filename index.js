const http = require('http');
const path = require('path');
const fs = require('fs');

// npm run dev
const PORT = process.env.PORT || 5000;


const server = http.createServer((req,res) => {
    // index page
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => {
    //         if(error)   throw(error);
    //         res.writeHead(200, { 'Content-Type' : 'text/html'} );
    //         res.end(content);
    //     })
    // }
    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (error, content) => {
    //         if(error)   throw(error);
    //         res.writeHead(200, { 'Content-Type' : 'text/html'} );
    //         res.end(content);
    //     })
    // }
    // // Basic REST API/Microservice
    // if(req.url === '/api/users') {
    //     const users = [
    //         { name : "Bob Smith", age : 25 },
    //         { name : "Olaf Haha", age : 29 }
    //     ];
    //     res.writeHead(200, { 'Content-Type' : 'application/json' });
    //     res.end(JSON.stringify(users));
    // }
    // Build file path (Dynamic)
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    //console.log(filePath);
    let extname = path.extname(filePath);
    
    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname) {
        case '.js' :
            contentType = 'text/javascript';
            break;
        case '.css' :
            contentType = 'text/css';
            break;
        case '.json' :
            contentType = 'application/json';
            break;
        case '.png' :
            contentType = 'image/png';
            break;
        case '.jpg' :
            contentType = 'image/jpg';
            break;
        // default : break;
    }
    // Read File
    fs.readFile(filePath, (error, content) => {
        if(error) {
            if(error.code == 'ENOENT') {
                // Handle page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
                    res.writeHead(200, { 'Content-Type' : 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                // Some server error (500 Status)
                res.writeHead(500);
                res.end("Server Error :" + error.code);
            }
        } else {
            // Success (200)
            res.writeHead(200, { 'Content-Type' : contentType })
            res.end(content, 'utf8');
        }
        console.log(contentType)
    })
    
    //console.log(req.url);
})

server.listen(PORT, () => {
    console.log("Server running on port ", PORT);
});