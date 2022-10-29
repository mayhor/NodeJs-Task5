const http = require('http')
const { readFile } = require('fs');

// files

// const aboutPage = readFileSync('./files/about.html')

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        readFile(__dirname + '/files/index.html', (err, html) => {
            if (err) throw err
            else {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(html)
                res.end()
            }
        
        })
    } else if (url === '/home') {
        readFile(__dirname + '/files/index.html', (err, html) => {
            if (err) throw err
            else {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(html)
                res.end()
            }
        
        })
        
    }
    else if (url === '/about') {
        readFile(__dirname + '/files/about.html', (err, html) => {
            if (err) throw err
            else {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(html)
                res.end()
            }
        
        })
    }      
    else if (url === '/contact') {
        readFile(__dirname + '/files/contact.html', (err, html) => {
            if (err) throw err
            else {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(html)
                res.end()
            }
        
        })
    }  
    
})

server.listen(3000, () => console.log("server running on port 3000"))