import React from 'react'
import WallOfFamesSwiper from '../../components/ui/swiper/WallOfFamesSwiper'

const WallOfFames = () => {
    return(
<div class="container">
      <section id="pricing" class="section bg-white">
        <div class="row d-flex justify-content-center">
          <div class="menu-content col-lg-8 mb-4">
            <div class="title text-center">
              <h1 className='fw-semibold'>Wall Of Fames</h1>
              <p class="text-muted text-sm">
              Success isn’t Always about Greatness. It’s about Consistency
              </p>
            </div>
          </div>
        </div>
<WallOfFamesSwiper/>
        </section>
        </div>
    )
}



export default WallOfFames