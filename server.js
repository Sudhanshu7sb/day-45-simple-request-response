var http = require("http");
var fs = require("fs");
var path =  require("path");
var styles = __dirname +'/style.css';
// http.createServer((req,res) => {
//     // console.log(req);
//     res.end("welcome to Node Js");
    
// }).listen(3000, () => console.log("server is running on port : 3000"));

let server = http.createServer(handleRequest);

function handleRequest(req,res) {
    console.log(req.url,req.method);
    // res.write("Welcome to Node Js Server");
    if(req.url === '/'  && req.method === 'GET'){
        res.setHeader('content-type','text/html');
        // fs.readFile('./index.html',(err,content) => {
            //     if(err) return;
            //     res.end(content);
            // })
        fs.createReadStream('./index.html').pipe(res);
   
        
       
    
    
    }

    

    // else if(req.url.indexOf('css')){

    //     res.setHeader('content-type','text/css');
    //     fs.createReadStream(__dirname +'/style.css').pipe(res);
    // }
    else if(req.url === '/about' && req.method === 'GET'){
        res.setHeader('content-type','text/html');
        // fs.readFile('./about.html',(err,content) => {
        //     if(err) return;
        //     res.end(content);
        // })
        fs.createReadStream('./about.html').pipe(res);
    }
    else {
        res.writeHead(404,{"Content-Type":"text/html"})
    res.end("<h1>Page Not Found</h1>");
    }
    
}

server.listen(4000, () => console.log("server started")); 
