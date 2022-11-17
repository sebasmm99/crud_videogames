const express = require('express')
const app = express()
const filedb = require('./connection')
const gameroute = require('./routes/game.routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/game', gameroute)

app.get('/', (req, res) => {
    res.end('Welcome')
})

app.listen(5000, function(){
    console.log('Server OK')
})