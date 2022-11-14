import React from "react";
import { Container, Row, Col } from "reactstrap";

import HeaderSwiper from "../../../services/headerQuery";

const Header = () => {
   return (
      <div>
         <section className="hero__section">
            <Container>
               <Row>
                  <div className="d-flex align-items-center col-6">
                     <div className="hero__content">
                        <HeaderSwiper />
                     </div>
                  </div>
                  <div lg="6" md="6" className="col-6">
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
