import React from "react";
import star from '../../../../img/star.png';

const Product = (props) => {
  return (
    <div class="block_prod">
      <div class="image_prod">
        {props.image == "prod_2" ? (
          <div className="prod_2"></div>
        ) : (
          <img src={require(`../../../../${props.image}`)} />
        )}
      </div>
      <div class="selling_block_price">
        <p class="selling_title_price">{props.selling_title_price}</p>
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

export default Product;
