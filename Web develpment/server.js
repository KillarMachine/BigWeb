const http = require('node:http');
const fs=require('fs');
const hostname = '127.0.0.1';
const port = 80;

const home=fs.readFileSync('./home_server.html');
const buy=fs.readFileSync('./buy_server.html');
const sale=fs.readFileSync('./sale_server.html');

const server = http.createServer((req, res) => {
  url=req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url=='/'|| url=='/home'){
    res.end(home);
  }else
  if(url=="/buy"){
    res.end(buy);
  }else
  if(url=="/sale"){
    res.end(sale);
  }else{
    res.end("<h1>404 error</h1>");
    res.statusCode = 404;
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});