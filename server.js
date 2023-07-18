const express = require('express')
const middleware = require('./middlewares/middlewares')
const mongoose = require('mongoose')
const router = require('./routes/routes')

app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(middleware)

mongoose.connect('mongodb://127.0.0.1:27017/test-api')
const db = mongoose.connection
db.on('error', err => console.log('Fail to connect, error '+err))
db.once('open', () => console.log('Success to connect'))

app.use(router)

const PORT = 8080

app.listen(PORT,function(){
    console.log(`The server is running on localhost:${PORT}`)
})