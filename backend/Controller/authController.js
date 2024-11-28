const express = require("express")
const jwt = require("jsonwebtoken")
const{ v4:uuid }= require("uuid")

const userdata = require("../db/user")




const signupHandler = async(req,res)=>{
    const{username,password}= req.body
    const isUserPresent = userdata.data.some(userdata=>userdata.username===username)
    if(isUserPresent){
        res.status(402).json({message:"user already exist"});
    }else{
        const id=uuid();
        const newUser ={id,username,password}
        userdata.data=[...userdata.data,newUser]
        const token = jwt.sign({ id: username }, process.env.SECRET_TOKEN)
        res.status(200).json({message:`Success - created new User--->${username}::${token}`})
    }
}
const loginHandler = async(req,res)=>{
        const { username, password } = req.body
        const isUserVerified = userdata.data.some(userdata => userdata.username === username && userdata.password === password);
        if (isUserVerified) {
            const token = jwt.sign({ id: username }, process.env.SECRET_TOKEN)
          return  res.status(200).json({ username, token, message: "user verified" })
        
        } else {
            res.status(401).json({ message: "invalid credentials" })
        }
    }
    module.exports= {loginHandler,signupHandler}