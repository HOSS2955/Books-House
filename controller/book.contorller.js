const Book = require("../models/book")

//--------------------------add new author 

const addBookData = async (req, res) => {

    try{
        const {name,email,phone,twAccount,bookDesc,pagesNum}=req.body
        const newBook= new Book({email,phone,twAccount,name,bookDesc,pagesNum})
        await newBook.save()
        res.status(200).send(newBook)
    }catch(e){
        res.status(500).send(e.message)
    }
}

//----------------------------get author by ID
const getbookByID = async (req ,res) => {
    try{
        const book = await Book.findOne({_id:req.params.id})

        if(!book) {
            return res.send(404).send('Cannot find book !')}
        res.status(200).send(book)
    }
    catch(e){
        res.status(400).send(e.message)
    }
}

//----------------------------------get all authors data

const getAllBook = async (req, res)=>{
    try {
        const book = await Book.find({})
        if(!book){
            throw Error("there is no book")
        }
        res.status(200).send(book)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//----------------------------------delete all authors

const deleteAllBook = async  (req , res)=>{
    try{
        await Book.deleteMany({})

        res.status(200).send("deleted sucessfuly")
    }
    catch(e){
        res.status(500).send(e.message)
    }
}

const updateBook = async (req,res)=>{
    try{
        const _id = req.params.id
        const book = await Book.findByIdAndUpdate({_id},req.body,{
            new:true,
            runvalidators:true
        })
        if(!book){
            return res.status(404).send('no book have this id')
        }
        res.status(200).send(news)
    }
    catch(e){
        res.status(500).send(e.message)
    }
}
module.exports = {addBookData,getbookByID,getAllBook,deleteAllBook,updateBook}