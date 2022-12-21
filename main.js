
const express = require('express')
const server  = express()
const port    = process.env.PORT || 3000

var count = 0

server.get("/", (req, res) => {
    console.log("sei la")
    count++
    return res.json({data:count})
})


server.listen(port, () => {
    console.log('Servidor online')
})
