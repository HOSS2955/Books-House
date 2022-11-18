const mongoose=require('mongoose')


const time = {
    timestamps: {currentTime: () => new Date().setHours(new Date().getHours() + 2)}
}

const homeSchema=new mongoose.Schema({
    nav:[{
        type:String,
        required:true
    }]
    ,
    logo:{
        type:String,
        required:true
    },
    slider:{
            type:String,
            required:true

    },
    about:{
        type:String,
        required:true
    },
    team:{
        type:String,
        required:true
    },
    teamImgs:{
        type:String,
        required:true
    }
},
 
    time
)


const Home=mongoose.model('Home',homeSchema)
module.exports=Home