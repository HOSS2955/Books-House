import React from "react";
// import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./aside.css";

export default function Aside() {
   const categoriesHandler = (e) => {
      console.log(e.target.name);
   };

   return (
      <div>
         {/* Search */}
         <div className="mb-4">
            <h5 className="mb-3 fw-bold">Categories</h5>
            <div className="categories d-flex flex-column ">
               <a href = "#"  className="mb-2 text-lead fw-lighter" name="all">
                  All
               </a>
               <a href = "#"  className="mb-2 text-lead fw-lighter" name="clothes">
                  Fiction
               </a>
               <a href = "#" className="mb-2 text-lead fw-lighter" name="watches">
                  Non-Fiction
               </a>
               <a  href = "#" className="mb-2 text-lead fw-lighter" name="footwear">
                  Natural
               </a>
            </div>
         </div>
         <hr></hr>
         <div className="mb-4">
            <h5 className="mb-3 fw-bold">Types</h5>
            <div className="categories d-flex flex-column ">
               <a href = "#"  className="mb-2 text-lead fw-lighter" name="all">
                  All
               </a>
               <a href = "#"  className="mb-2 text-lead fw-lighter" name="clothes">
                  Comedy
               </a>
               <a href = "#" className="mb-2 text-lead fw-lighter" name="watches">
                  Drama
               </a>
               <a  href = "#" className="mb-2 text-lead fw-lighter" name="footwear">
                  Action
               </a>
               <a  href = "#" className="mb-2 text-lead fw-lighter" name="footwear">
               Adventure stories
               </a>
               <a  href = "#" className="mb-2 text-lead fw-lighter" name="footwear">
               Crime
               </a>
            </div>
         </div>
         <hr></hr>
         <div className="mb-4">
            <h5 className="mb-3 fw-bold">Age</h5>
            <div className="categories d-flex flex-column ">
               <a href = "#"  className="mb-2 text-lead fw-lighter" name="all">
                  from 5 to 10
               </a>
               <a href = "#"  className="mb-2 text-lead fw-lighter" name="clothes">
                  from 10 to 20
               </a>
               <a href = "#" className="mb-2 text-lead fw-lighter" name="watches">
                  from 20 to 30
               </a>
               <a  href = "#" className="mb-2 text-lead fw-lighter" name="footwear">
                  from 30 to 50
               </a>
               <a  href = "#" className="mb-2 text-lead fw-lighter" name="footwear">
               Above 50
               </a>
            </div>
         </div>
         <hr></hr>
         <div className="mb-4">
            <h5 className="mb-3 fw-bold">Price</h5>
            <div className="categories d-flex flex-column ">
               <Form>
                  <Form.Group className="mb-3 ">
                     <Form.Label>From</Form.Label>
                     <Form.Control
                        type="text"
                        className="border border-1 rounded-0"
                        placeholder=""
                     />
                  </Form.Group>

                  <Form.Group className="mb-3">
                     <Form.Label>To</Form.Label>
                     <Form.Control
                        type="text"
                        className="border border-1 rounded-0"
                        placeholder=""
                     />
                  </Form.Group>
                  <Button
                     variant="dark"
                     className="rounded-0 px-4"
                     type="submit"
                  >
                     Filter
                  </Button>
               </Form>
            </div>
         </div>
         
         
      </div>
   );
}
