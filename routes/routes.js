const express = require('express');
const router = express.Router()

users = [{
    id: 1,
    name: "aryo",
}]


router.route('/users')
    .get((req,resp)=>{
        resp.json({
            message: "Success get data",
            data: users,
        })
    })
    .post((req,resp)=>{
        let id = users[users.length - 1].id
        const user = {
            id: id+1,
            name: req.body.name            
        }
        users.push(user)
        resp.json(users)
    })

router.route('/users/:id')
    .get((req,resp)=>{
        const id = req.params.id
        user = users.filter(user =>{
            if (user.id == id){
                return user
            }
        })
        resp.json(user)
    })
    .put((req,resp)=>{
        const id = req.params.id
        user = users.filter(user => {
            if (user.id == id){
                user.name = req.body.name
                return user
            }
        })
        resp.json(user)
    })
    .delete((req,resp)=>{
        const id = req.params.id
        user = users.splice(id-1,1)
        resp.json(users)
    })

module.exports = router