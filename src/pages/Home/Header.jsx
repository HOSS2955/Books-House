import React from 'react';
import { Container , Row , Col } from 'reactstrap';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Header = () => {
    const year = new Date().getFullYear();
  return (
    <div>
      <section className="hero__section">
        <Container>
          <Row>
            <Col className='d-flex align-items-center'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make your interior more minimalistic & modern</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae quam rerum at sed sit tenetur, necessitatibus natus? Ut, dolore.</p>

                <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="/shop">Shop Now</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src="https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Header
