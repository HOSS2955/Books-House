const BookReview = require("../models/bookreview");

//--------------------------add new book review

const addBookReview = async (req, res) => {
  try {
    const { title, reviwer, desc, publisher, category, imageSrc } = req.body;
    const newbookreview = new BookReview({
      title,
      reviwer,
      desc,
      publisher,
      category,
      imageSrc,
    });
    await newbookreview.save();
    res.status(200).send(newbookreview);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

//----------------------------get book review by ID
const getBookReviewById = async (req, res) => {
  try {
    const bookreview = await BookReview.findOne({ _id: req.params.id });

    if (!bookreview) {
      return res.send(404).send("Cannot find Package !");
    }
    res.status(200).send(bookreview);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

//----------------------------------get all book reviews data

const getAllBookRewiew = async (req, res) => {
  try {
    const bookreviews = await BookReview.find({});
    if (!bookreviews) {
      throw Error("there is no packages");
    }
    res.status(200).send(bookreviews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addBookReview, getBookReviewById, getAllBookRewiew };
