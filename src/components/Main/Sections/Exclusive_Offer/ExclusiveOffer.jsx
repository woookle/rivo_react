import React from "react";
import exOffer from '../../../../img/exclusive_offer.png'

const ExclusiveOffer = () => {
  return (
    <section class="exclusive_offer wow animate__animated animate__fadeInUp">
      <div class="container">
        <div class="exc_block">
          <img src={exOffer} alt="exclusive_offer" className="wow animate__animated animate__fadeInUp" />
          <div class="exc_right_block wow animate__animated animate__fadeInUp">
            <p class="exc_title">Exclusive offer</p>
            <p class="exc_sub_title">
              Unlock the ultimate style upgrade with our exclusive offer Enjoy
              savings of up to 40% off on our latest New Arrivals
            </p>
            <div class="exc_time">
              <div class="exc_time_block">
                <p class="exc_time_oclock">06</p>
                <p class="exc_time_name">Days</p>
              </div>
              <div class="exc_time_block">
                <p class="exc_time_oclock">18</p>
                <p class="exc_time_name">Hours</p>
              </div>
              <div class="exc_time_block">
                <p class="exc_time_oclock">48</p>
                <p class="exc_time_name">Min</p>
              </div>
            </div>
            <a href="#" class="exc_buy_now">BUY NOW</a>
          </div>
        </div>
      </div>
    </section>
  )

}

export default ExclusiveOffer;