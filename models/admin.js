const mongoose = require("mongoose");
const bcrypt=require('bcrypt')
const adminSchema = new mongoose.Schema({
  email: {
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    unique:true
   },
  password: { 
    type: String,
    required: true,
    trim:true
   },
   code:{
    type:String
   }
});


adminSchema.pre('save', async function (next){

    this.password=await bcrypt.hash(this.password,parseInt(process.env.saltRounds)) 

next()
})

adminSchema.pre('findByIdAndUpdate',async function (next){
    const hookData=await this.model.findOne(this.getQuery()).select("__v")
    console.log(hookData);
    this.set({__v:hookData.__v+1})
    if(hookData.__v>3){

res.json({message:'sorry no more req'})

    }else{

        next()

    }


    })


const Admin= mongoose.model("Admin", adminSchema);
module.exports = Admin;