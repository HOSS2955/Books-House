import React from "react";
import "../../../assets/css/Footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer book-footer bg-dark">
      {/* <div className="book__wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
      <Container className="text-light">
        <Row>
          <Col md="6" lg="3"  className="pt-md-4 mt-sm-5">
            <div className="logo">
              <img src="./images/logo2.png" alt="logo" />
              <div>
                <h1 className="text-light">BooksHouse</h1>
              </div>
            </div>
            <p className="footer__text mt-4 pe-3 text-white-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
          <Col md="6" lg="3" className="pt-md-4 mt-sm-5">
            <div className="footer__quick-links ">
              <h6 className="quick__links-title">Top Categories</h6>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 bg-transparent">
                  <Link to="#"  className="text-white-50">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0  bg-transparent">
                  <Link to="#" className="text-white-50">Modern Sofa</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col md="6" lg="3" className="pt-md-4 mt-sm-5">
            <div className="footer__quick-links">
              <h6 className="quick__links-title">Useful Links</h6>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0  bg-transparent">
                  <Link to="shop" className="text-white-50">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0  bg-transparent">
                  <Link to="cart" className="text-white-50">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0  bg-transparent">
                  <Link to="#" className="text-white-50">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col md="6" lg="3" className="pt-md-4 mt-sm-5">
            <div className="footer__quick-links">
              <h6 className="quick__links-title">Contact</h6>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0  gap-2  bg-transparent">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p className="text-white-50">123 Snan st , Heliopolis-Cairo</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0  gap-2  bg-transparent">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p className="text-white-50">+20 01013898149</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0  gap-2  bg-transparent">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p className="text-white-50">mirnamilad0101@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by DevTeam . All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
