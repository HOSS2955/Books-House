import React from 'react';
import "../../assets/css/Footer.css";

import { Container , Row , Col , ListGroup , ListGroupItem} from "reactstrap"
import { Link} from "react-router-dom"
// import logo from "../../assets/images/eco-logo.png"

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
            <img src="./images/eco-logo.png" alt="logo"/>
              <div>
                <h1 className="text-white">Furniture</h1>
              </div>

             
              </div>
              <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum labore cum voluptate inventore voluptatem velit consequatur ad at ipsam.
              </p>
          </Col>
          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="login">ALogin</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>123 AbasElakad st , Nasr City-Cairo</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                <span><i className="ri-phone-line"></i></span>
                  <p>+20 01013898149</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                <span><i className="ri-mail-line"></i></span>
                  <p>mirnamilad0101@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">Copyright {year} developed by Mirna Milad . All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
