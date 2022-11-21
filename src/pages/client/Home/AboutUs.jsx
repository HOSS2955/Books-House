import React from "react";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">

          <img src="./images/4185.jpg" className="homeAbout__img w-75 h-75"/>
        </div>
        <div className="home__about col-md-6 col-sm-12 pt-5">
        <h5 className="fw-bold mb-4 pt-5">Who We Are ?</h5>
          <p className="text-muted">
          Bookshouse realizes the importance of ink and paper which is why we aim at freeing them. We know that self-publishing can be risky and that publishing houses don’t always prefer the risk, either. That’s why, in Bookshouse, our mission is to help every author get a chance at recognition, not only by displaying the book in our store but also by providing detailed and honest reviews of the book to encourage readers to put their trust in lesser-known books.  
Bookshouse also helps you get hold of the books you love at the touch of a screen and find your next favorite book among thousands of books worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
