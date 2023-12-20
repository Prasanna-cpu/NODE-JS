import http from 'http'

const server=http.createServer((req,res)=>{
    console.log(req);
    res.write('<h1>Hello Server</h1>')
})

server.listen(8000,()=>{
    console.log("Server listening on port 8000")
})