
import React from 'react'

const homePageQuery = () => {

    const baseUrl ="http://localhost:3005/slider";
async function fetchSlider() {
  const { data } = await axios.get(baseUrl);
  console.log(data)
  return data;}
  return (
    <div>
      
    </div>
  )
}
export default homePageQuery
