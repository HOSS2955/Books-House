const jwt=require('jsonwebtoken')
const User=require('../models/user')


const auth2=async (req,res,next)=>{
   try{
    const token=req.header('Authorization').replace('Bearer ','')
    if(!token){
      return res.status(401).send('no token founed')
    }
    jwt.verify(token,process.env.logingtoken,async(err,decoded)=>{
      if(err){
         console.log('403 expired')
         return res.status(403).send()
      }
      const user=await User.findOne({_id:decoded._id})
      console.log('user founded ystaaa not expired')
      req.user=user
      req.token=token
      next()

    })
   

   }
   catch(e){
       res.status(401).send("Please Authenticate !")
   }
}

module.exports=auth2