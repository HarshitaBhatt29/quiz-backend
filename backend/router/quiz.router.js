

const express = require("express")
const quizRouter = express.Router();
const quizes =require("../db/quizes");
const authVerify = require("../middleware/authVerify")

quizRouter.route("/",authVerify)
    .get((req,res)=>{
   res.json(quizes)
    })

    module.exports= quizRouter