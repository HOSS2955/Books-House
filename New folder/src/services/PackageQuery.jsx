import React  from "react";
import axios from "axios";

import { useQuery } from "react-query";
import { motion } from "framer-motion";
import {TbBook2} from "react-icons/tb"
// import { resAction } from "../store/reducers/resSlice";
// import { useDispatch } from "react-redux";

const PackageQuery = () => {


    const baseUrl ="http://localhost:3005/services";
    // const {getResponse} = resAction;
    async function fetchSlider() {
      const { data } = await axios.get(baseUrl);
      console.log(data)
      return data;
      
    }
  
    const { data, error, isError, isLoading } = useQuery("packages", fetchSlider);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>Error! {error.message}</div>;
    }
  






// useEffect(() => {
// const dispatch = useDispatch();

//   await axios.get(baseUrl).then(
//  (res)=>res.json()
// ).then(
//  (slider)=> dispatch(getResponse(slider))
// )
// . catch(
//  (error)=>{
//    console.log(error)
//  }
// )

// }, [input])


    // async function FetchResponse() {

       
        
    //   }





      


      // const { data, error, isError, isLoading } = useQuery("services", FetchResponse);
  
    //   if (isLoading) {
    //     return <div>Loading...</div>;
    //   }
    //   if (isError) {
    //     return <div>Error! {error.message}</div>;
    //   }

    //   const dispatch = useDispatch()

    
      
        return (

<div class="pricing__cards row">
{data.map((service , index) =>{
        return <motion.div whileHover={{scale:1.05}} class="single-price col-lg-3 col-md-6 d-flex flex-column justify-content-center p-4" key={index}
            >
              <div>
              <div class="top-part transition-colors">
                {/* <h1 class="text-center fw-light mx-auto">{service.id}</h1> */}
                <div className="book__icon w-100"><TbBook2/></div>
                <h4 class="text-center text-sm">{service.name}</h4>
                <p class="text-center">For the individuals</p>
              </div>
              <div class="package-list text-center text-muted">
                <ul>
                  <hr />
                  <li class="">{service.details}</li>
                  <hr />
                  <li class="">{service.details}</li>
                  <hr />
                  <li class="">{service.details}</li>
                  <hr />
                </ul>
              </div>
              <div class="bottom-part text-center">
                <h1 class="text-center fs-2 fw-bold price">{service.price}</h1>
                <a
                  class="price-btn text-uppercase px-4 py-2 fw-bold"
                  href="#"
                  >Buy Now</a
                >
              </div>
              </div>
            </motion.div>
        })}
            </div>

        )
}

export default PackageQuery
