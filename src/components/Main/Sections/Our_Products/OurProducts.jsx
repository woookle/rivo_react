import React from "react";
import Product from "./Product";

const OurProducts = () => {
  const blockProducts = [
    {
      image: "img/producs_1.png",
      selling_title_price: "Spread Collar Shirt",
      price: "48.99",
      stars: "5.0",
    },
    {
      image: "prod_2",
      selling_title_price: "White Solid Formal Shirt",
      price: "39.00",
      stars: "4.9",
    },
    {
      image: "img/producs_3.png",
      selling_title_price: "Shine On Me Blouse",
      price: "42.99",
      stars: "4.8",
    },
    {
      image: "img/producs_4.png",
      selling_title_price: "Gray Solid Padded Jacket",
      price: "32.99",
      stars: "4.7",
    },
    {
      image: "img/producs_5.png",
      selling_title_price: "Printed Loose T-shirt",
      price: "39.99",
      stars: "5.0",
    },
    {
      image: "img/producs_6.png",
      selling_title_price: "Summer Wind Crop Shirt",
      price: "39.95",
      stars: "4.7",
    },
    {
      image: "img/producs_7.png",
      selling_title_price: "Tailored Jacket",
      price: "46.00",
      stars: "4.9",
    },
    {
      image: "img/producs_8.png",
      selling_title_price: "Solid Round Neck T-shirt",
      price: "36.00",
      stars: "5.0",
    },
  ];

  return (
    <section class="our_products">
      <p class="title_products wow animate__animated animate__fadeInUp">Our products</p>
      <ul class="nav_menu_products wow animate__animated animate__fadeInUp">
        <li>
          <a href="#">SALE</a>
        </li>
        <li>
          <a href="#" class="active_products">
            HOT
          </a>
        </li>
        <li>
          <a href="#">NEW ARRIVALS</a>
        </li>
        <li>
          <a href="#">ACCESSORIES</a>
        </li>
      </ul>
      <div class="container">
        <div class="products_content wow animate__animated animate__fadeInLeft">
          {blockProducts.map((el, i) => (
            <Product
              key={i}
              image={el.image}
              selling_title_price={el.selling_title_price}
              price={el.price}
              stars={el.stars}
            ></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
