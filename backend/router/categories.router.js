const express = require('express');
const categoriesRouter =  express.Router();
const quizes = require("../db/quizes")

categoriesRouter.route("/")
.get((req,res)=>{
res.json(quizes)
})
module.exports = categoriesRouter;