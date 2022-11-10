import React  from 'react';
import { useSelector } from 'react-redux';
import ResponseQuery from '../../services/responseQuery';


const Pricing = () => {

  const {packages} = useSelector((state) =>state.res)
  console.log(packages)
  return (
    <div>
           
           <div className="container">
      <h1>Services</h1>
      <ResponseQuery ></ResponseQuery>
    </div>
  </div>
  )
}

export default Pricing