import React from 'react';

import { BiGlasses } from 'react-icons/bi';

const PackageCard = ({item}) => {
    // console.log(item["specifications"])
  return (
    <div className="package__item col-lg col-md-12 mb-sm-5">
                      <div className="package__details">
                        <div className="package__header mb-5">
                          <img className="demo-bg" src="./images/4185.jpg" />
                          <div className="demo-content">
          <h3 className="fw-bold">Free Plan</h3>
          <p className="text-muted">For Small teams or office</p>
          </div>
          </div>
          <ul class="package__features">
          {item["specifications"].map((star , index)=>{
            return (
              <li className="text-muted">
                <button className="btn p-0"><BiGlasses/></button>{star}</li>
            )
          })}
          </ul>
          <div className="package__control d-flex flex-column align-items-center">
          <div class="package__price pt-3 d-flex align-items-center"><span className="price fs-5">$0</span><span>/Monthly</span></div>
          <button className="btn btn-danger mt-4 rounded-pill"> Start free trial</button>
          </div>
          </div>
          </div>
  )
}

export default PackageCard