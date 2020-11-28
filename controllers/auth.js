const auth = require('../models/User')

async function find(){
    return await auth.find({})
}

async function create(){
    return await auth.create({
        first_name: fname,
        last_name: lname,
        username: username,
        email: email,
        password: pass
    })
}

module.exports = {
    find,
    create
}