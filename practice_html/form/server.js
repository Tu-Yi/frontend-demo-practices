const http=require('http');
const url=require('url');

http.createServer((req,res)=>{

    let {pathname,query} = url.parse(req.url,true);
    let {user,pass} = query;

    if(pathname==='/reg'){
        console.log(user)
        console.log(pass)
        res.write("success");
        res.end();
    }

}).listen(9999);