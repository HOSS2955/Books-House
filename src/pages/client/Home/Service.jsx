import React from 'react';
import ServiceCard from './ServiceCard';

const Service = ({ serviceArray }) => {
  return (
        <div className="container">
           <section id="pricing" className="section bg-white">
              <div className="row d-flex justify-content-center">
                 <div className="menu-content pb-70 col-lg-8 mb-4">
                    <div className="title text-center">
                       <h1 className="fw-semibold">Choose Your Plan</h1>
                       <p className="text-muted text-sm">
                          When someone does something that they know that they
                          shouldn`t do, did they.
                       </p>
                    </div>
                 </div>
              </div>
              <div className="container text-sm">
                 <div className="row">
                  {serviceArray.map((item , index)=>{
                     return (<ServiceCard key={index} item={item}></ServiceCard>)
                  })}
                 </div>
              </div>
           </section>
        </div>
  )
}

export default Service