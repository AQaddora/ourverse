const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, '/visit-dimension')))
app.get('/visit-dimension.data.br', (req, res) => {
    res.setHeader('Content-Encoding', 'br')
    res.sendFile(path.join(__dirname, '/visit-dimension/Build/visit-dimension.data.br'))
})
app.get('/visit-dimension.framework.js.br', (req, res) => {
    res.setHeader('Content-Encoding', 'br')
    res.setHeader('Content-Type', 'application/javascript')
    res.sendFile(path.join(__dirname, '/visit-dimension/Build/visit-dimension.framework.js.br'))
})
app.get('/visit-dimension.wasm.br', (req, res) => {
    res.setHeader('Content-Encoding', 'br')
    res.setHeader('Content-Type', 'application/wasm')
    res.sendFile(path.join(__dirname, '/visit-dimension/Build/visit-dimension.wasm.br'))
})
http.createServer(app).listen(port, () => {
    console.log('server running...')
})