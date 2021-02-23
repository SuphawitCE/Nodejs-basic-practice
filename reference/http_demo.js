const http = require('http');
const PORT = 5000;
// Create server object
http.createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
}).listen(PORT, () => {
    console.log("Server running...");
})
