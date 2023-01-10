const http=require('http');
const {readFileSync}=require('fs');
const homePage=readFileSync('./index.html');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url=='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end();
    }
    else if(url=='/contact'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>contact me</h1>');
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>result not found</h1>');
        res.end();
    }
    //console.log('user hit the server');
    
})
server.listen(5000);
