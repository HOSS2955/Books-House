import React  from "react";
import axios from "axios";

import { useQuery } from "react-query";
// import { resAction } from "../store/reducers/resSlice";
// import { useDispatch } from "react-redux";

const ResponseQuery = () => {


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
          <div className="d-flex">
      {data.map((service , index) =>{
        return(
        <div  key={index}
        className = "col-lg-3 col-md-6 single-price d-flex flex-column justify-content-center"
      >
        <div className = "top-part transition-colors">
          <h1 className = "text-center fw-light mx-auto">{service.name}</h1>
          <h4 className = "text-center text-sm">{service.id}</h4>
          <p className = "text-center">{service.details}</p>
        </div>
        
      </div>)}
      )}
      </div>
        )
}

export default ResponseQuery
