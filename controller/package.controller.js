const Package = require("../models/package")

//--------------------------add new package 

const addPackageData = async (req, res) => {

    try{
        //دي الداتا اللي المفروض نوصلها يا نورهان 
        //const {packName,packPrice,packNumber,packTitle,packSubTitle,packDesc}=req.body
        const {packageName,packagePrice,reviewsNumber}=req.body
        const newPackage= new Package({packageName,packagePrice,reviewsNumber})
        await newPackage.save()
        res.status(200).send(newPackage)
    }catch(e){
        res.status(500).send(e.message)
    }
}

//----------------------------get package by ID
const getPackageByID = async (req ,res) => {
    try{
        const Package = await Package.findOne({_id:req.params.id})

        if(!Package) {
            return res.send(404).send('Cannot find Package !')}
        res.status(200).send(Package)
    }
    catch(e){
        res.status(400).send(e.message)
    }
}


//----------------------------------get all packages data

const getAllPackages = async (req, res)=>{
    try {
        const packages = await Package.find({})
        if(!packages){
            throw Error("there is no packages")
        }
        res.status(200).send(packages)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//----------------------------------delete all packages

const deleteAllPackages = async  (req , res)=>{
    try{
        await Package.deleteMany({})

        res.status(200).send("deleted sucessfuly")
    }
    catch(e){
        res.status(500).send(e.message)
    }
}

module.exports = {addPackageData,getPackageByID,getAllPackages,deleteAllPackages}