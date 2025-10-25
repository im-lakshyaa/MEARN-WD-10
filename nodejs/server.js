//https modules...
//server using http--> http-module-->createserver and listen (req,res)
import { log } from "console";
import http from "http";
const Port=3000;

const server =http.createServer((req,res)=>{
    //req and respons handling ....using http
res.end("hello form Server");
})

server.listen(Port,()=>{
    console.log("your server is running of localhost in port 3000");
    
})