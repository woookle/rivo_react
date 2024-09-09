import React from "react";
import star from '../../../../img/star.png';

const SellingBlock = (props) => {
  return (
    <div class="block">
      <div class="selling_block_image">
        <img src={require(`../../../../${props.image}`)} alt="selling" />
      </div>
      <div class="selling_block_price">
        <p class="selling_title_price">{props.title_price}</p>
        <div class="selling_price_content">
          <p class="price">${props.price}</p>
          <div class="line"></div>
          <div class="stars">
            <p>{props.stars}</p>
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingBlock;