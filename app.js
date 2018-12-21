const http = require('http')

// function rqListener(req, res){
    // old school way.
// }
// http.createServer(rqListener)

const server = http.createServer((req, res)=>{
    console.log(req)
    res.setHeader('content-type', 'text/html')
    res.write(`<html>
    <head><title>My First Page</title></head>
    <body><h1>Hello Page!</h1></body>
    </html>`)
    res.end()
})

server.listen(3040)