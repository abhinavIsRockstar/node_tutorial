const http = require('http');

const server = http.createServer((req,res) => {
if(req.url === '/'){
    res.end('Hi, Welcome to our Homepage');
}

if(req.url === '/about'){
    res.end('Hi, Welcome to our History');
}
res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page that You are looking for
    </p>
    <a href="/">Back Home</a>
`)

}) 



server.listen(5000);
