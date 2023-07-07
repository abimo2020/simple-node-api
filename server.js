const express = require('express');
const middleware = require('./middlewares/middlewares');
const router = require('./routes/routes')

app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(middleware)

app.use(router)

const PORT = 8080

app.listen(PORT,function(){
    console.log(`The server is running on localhost:${PORT}`)
})