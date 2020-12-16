const db = require('../models');
const bcryptjs = require('bcryptjs');

const registerUser = async (req,res) => {
    const {username,password,name} = req.body;
    const targetUser = await db.User.findOne({where: {username : username}});
    if(targetUser){
        res.status(400).send({message : "Username already taken"});
    } else {
     const salt = bcryptjs.genSaltSync(12);
     const hashedPassword = bcryptjs.hashSync(password,salt);
     
     await db.User.create({
         username : username,
         password : hashedPassword,
         name : name,
     })
     res.status(201).send({message: "User created"});
    }
   
}
const loginUser = (req,res) => {
    res.send("login user")

}


module.exports = {
    registerUser,
    loginUser,
}