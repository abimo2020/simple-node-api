users = [{
    id: 1,
    name: "aryo",
}]

function findAll(req, resp){
    resp.json({
        message: "Success get data",
        data: users,
    })
}

function store(req, resp){  
        let id = users[users.length - 1].id
        const user = {
            id: id+1,
            name: req.body.name            
        }
        users.push(user)
        resp.json(users)
}

function find(req, resp){
        const id = req.params.id
        user = users.filter(user =>{
            if (user.id == id){
                return user
            }
        })
        resp.json(user)
}

function update(req, resp){
        const id = req.params.id
        user = users.filter(user => {
            if (user.id == id){
                user.name = req.body.name
                return user
            }
        })
        resp.json(user)
}

function remove(req, resp){
        const id = req.params.id
        user = users.splice(id-1,1)
        resp.json(users)
}

module.exports = {findAll, find, store, update, remove}