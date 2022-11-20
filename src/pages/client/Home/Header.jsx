import React from "react";
import { Container, Row, Col } from "reactstrap";

import HeaderSwiper from "../../../components/client/ui/swiper/HeaderSwiper";
// import hero_2 from "./images/hero_2.jpg"

const Header = ({ headerArray }) => {
  return (
    <div>
      <section className="hero__section">
        {/* <div className="custom-shape-divider-top-1668530886"> */}
          {/* <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
              className="shape-fill"
            ></path>
          </svg> */}
        {/* </div> */}
        <Container fluid>
          <Row>
            <div className="d-flex align-items-end col-6 pb-5 ps-5">
              <div className="hero__content">
                <HeaderSwiper headerArray={headerArray} />
              </div>
            </div>
            <div lg="6" md="6" className="col-6 p-0">
              <div className="hero__img d-flex align-items-end">
                <img
                  src="./images/13258.jpg"
                  //  src="https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
            {/* <img
                     className="p-0"
                     src="https://images.pexels.com/photos/1809340/pexels-photo-1809340.jpeg?auto=compress&cs=tinysrgb&w=600"
                  /> */}
          </Row>
        </Container>
        {/* <div className="custom-shape-divider-bottom-1668531089">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </section>
    </div>
  );
};

export default Header;
