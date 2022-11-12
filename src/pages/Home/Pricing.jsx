import React  from 'react';
import { useSelector } from 'react-redux';
import PackageQuery from '../../services/PackageQuery';
import "../../assets/css/Package.css"


const Pricing = () => {

  const {packages} = useSelector((state) =>state.res)
  return (
        <div class="container">
      <section id="pricing" class="section bg-white">
        <div class="row d-flex justify-content-center">
          <div class="menu-content pb-70 col-lg-8 mb-4">
            <div class="title text-center">
              <h1 className='fw-semibold'>Choose Your Plan</h1>
              <p class="text-muted text-sm">
              When someone does something that they know that they shouldn`t
                do, did they.
              </p>
            </div>
          </div>
        </div>
        <div class="container text-sm">
          <div class="row">
          <PackageQuery ></PackageQuery>
          </div>
        </div>
      </section>
      </div>
























 
 




  )
}

export default Pricing