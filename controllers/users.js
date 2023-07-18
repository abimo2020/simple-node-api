const User = require('../models/users')

function findAll(req, resp){
    let keyword = {}
    if (req.query.keyword){
        keyword = {username: {$regex: req.query.keyword}}
    }
    User.find(keyword, "username password").then((data) => {
        resp.json({
            message: "Success get data",
            data: data,
        })
    }).catch((err) => {
        resp.json({
            message: "Failed get data",
            error: err
        })
    })
}

function store(req, resp){
    User.create({
        username: req.body.username,
        password: req.body.password,
    }).then((data)=>{
        console.log(data)
        resp.json({
            message: 'success to create data'
        })
    }).catch((error)=>{
        console.log(error)
        resp.json({
            message: 'failed to create data',
            error: err
        })
    })
}

function find(req, resp){
    const id = req.params.id
    User.findById(id).then((data)=>{
        resp.json({
            message: "Success get data",
            data: data,
        })
    }).catch((error)=>{
        resp.json({
            message: "failed to get data",
            error: error.message,
        })
    })
}

function update(req, resp){
    const id = req.params.id
    User.findById(id).catch((error)=>{
        console.log(error)
        resp.json({
            message: 'failed to get data user',
            error: error.message
        })
    })
    User.updateOne({_id: id},{
        email: req.body.email,
        username: req.body.username
    }).then(()=>{
        resp.json({
            message: 'succes to update user',
        })
    }).catch((err)=>{
        resp.json({
            message: 'failed to update user',
            error: err.message
        })
    })
}

function remove(req, resp){
    const id = req.params.id
    User.findByIdAndDelete(id).then(()=>{
        resp.json({
            message: 'succes to delete user',
        })
    }).catch((error)=>{
        resp.json({
            message: 'failed to delete user',
            error: error.message,
        })
    })
}

module.exports = {findAll, find, store, update, remove}