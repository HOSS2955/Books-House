import React from "react";
import { Container, Row, Col } from "reactstrap";

import HeaderSwiper from "../../../components/client/ui/swiper/HeaderSwiper";

const Header = ({ headerArray }) => {
  return (
    <div>
      <section className="hero__section">
        <Container fluid>
          <Row>
            <div className="d-flex align-items-center col-6 p-5">
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
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Header;
