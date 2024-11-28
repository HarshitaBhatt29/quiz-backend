const jwt = require("jsonwebtoken")
const authVerify = (req,res,next)=>{
    const token = req.headers['authorization'].split(' ')[1];
    // console.log(req.headers.Authorization)
    try {
        const decodedToken = jwt.verify(token,process.env.SECRET_TOKEN)
            req.user={userId: decodedToken.id}
            return next();
  }    
    catch(err){
  console.log(`error from server ${JSON.stringify(err)}`)
    }


}
module.exports = authVerify