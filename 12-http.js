const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our home page')
        return
    }
    // res.write('Welcome to our home page')
    // res.end()
    if(req.url === '/about'){
        res.end('Here is out short history')
        return
    }else {
        res.end(`
            <h1>Opps!</h1>
            <p>We can't seem to find the page that you are looking for</p>
            <a href="/">back home</a>
        `)
        return
    }
})

server.listen(5000)