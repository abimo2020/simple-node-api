function logger(req, resp, next){
    console.log(`Time: ${Date.now()}, Method: ${req.method}, URL: ${req.url}`)
    next()
}

module.exports = logger