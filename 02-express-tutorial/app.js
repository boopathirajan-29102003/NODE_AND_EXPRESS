console.log('Success')
const {readFileSync}=require('fs')

//get all files
const homePage=readFileSync('./navbar-app/index.html')
const homeStyle=readFileSync('./navbar-app/styles.css')
const homeImage=readFileSync('./navbar-app/logo.svg')
const homeJS=readFileSync('./navbar-app/browser-app.js')

const http = require('http')

const server = http.createServer((req,res)=>{
    const url=req.url
    if (url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/js'})
        res.write(homeJS)
        res.end()
    }
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1 style='color:blue'>about page</h1>")
        res.end()
    }
    else{
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1 style='color:blue'>page not found</h1>")
        res.end()
    }
})

server.listen(5000)