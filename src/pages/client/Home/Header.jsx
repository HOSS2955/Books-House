import React from "react";
import { Container, Row, Col } from "reactstrap";

import HeaderSwiper from "../../../components/client/ui/swiper/HeaderSwiper";
// import hero_2 from "./images/hero_2.jpg"

const Header = ({ headerArray }) => {
  return (
    <div>
      <section className="hero__section">
        <Container fluid>
          <Row>
            {/* <div className="d-flex align-items-center col-6 p-5">
              <div className="hero__content">
                <HeaderSwiper headerArray={headerArray} />
              </div>
            </div>
            <div lg="6" md="6" className="col-6 p-0">
              <div className="hero__img">
                <img
                  src="https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div> */}
            <img className="p-0" src = "https://images.pexels.com/photos/1809340/pexels-photo-1809340.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Header;
