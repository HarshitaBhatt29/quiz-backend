
require('dotenv').config();
const express = require("express")
const cors = require('cors');




const quizRouter = require("./router/quiz.router")
const {loginRouter,signupRouter}= require("./router/auth.router")
const categoriesRouter = require("./router/categories.router")
const routenotfound = require("./middleware/routeNotFound")
const quizes = require("./db/quizes")


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
app.get("/", (req, res) => {
    res.send(quizes);
})


app.use("/auth/login",loginRouter );
app.use("/auth/signup",signupRouter);
app.use("/categories",categoriesRouter);
app.use("/quiz", quizRouter);
app.use(routenotfound)
app.listen(process.env.PORT || PORT, () => {
    console.log("server started....")
})