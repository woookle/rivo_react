import React from "react";
import SellingBlock from "./SellingBlock";
import seeAllArrow from '../../../../img/see_all_arrow.svg';

const BestSelling = () => {
  const sellingBlocks = [
    {
      image: "img/best_selling_1.png",
      title_price: "Regular Fit Long Sleeve Top",
      price: "38.99",
      stars: "5.0",
    },
    {
      image: "img/best_selling_2.png",
      title_price: "Black Crop Tailored Jacket",
      price: "$62.99",
      stars: "4.9",
    },
    {
      image: "img/best_selling_3.png",
      title_price: "Textured Sunset Shirt",
      price: "49.99",
      stars: "5.0",
    },
  ];
  return (
    <section class="best_selling">
      <p class="selling_title">Best selling</p>
      <p class="selling_title_content">
        Get in on the trend with our curated selection of best-selling styles.
      </p>
      <div class="selling_blocks">
        <div class="container">
          {sellingBlocks.map((el, i) => (
            <SellingBlock
              image={el.image}
              title_price={el.title_price}
              price={el.price}
              stars={el.stars}
              key={i}
            ></SellingBlock>
          ))}
        </div>
      </div>
      <div class="see_all__sells">
        <a href="#">
          <p>See all</p>
          <img src={seeAllArrow} alt="arrow" />
        </a>
      </div>
    </section>
  );
};

export default BestSelling;
