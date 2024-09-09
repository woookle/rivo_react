import React from "react";
import ClotheBlock from "./ClotheBlock";

const ClothesForYou = () => {
  const clothes = [
    {
      img: "img/designer_1.png",
      clothes_title: "Accessories",
      clothes_sub_title:
        "Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.",
    },
    {
      img: "img/designer_2.png",
      clothes_title: "Dresses",
      clothes_sub_title:
        "Explore a stunning range of designer dresses, including evening gowns and chic day dresses.",
    },
    {
      img: "img/designer_3.png",
      clothes_title: "Outerwear",
      clothes_sub_title:
        "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.",
    },
  ];

  return (
    <section class="clothes_for_you">
      <p class="designer_title">Designer Clothes For You</p>
      <p class="designer_sub_title">
        Immerse yourself in the world of luxury fashion with our meticulously
        crafted designer clothes!
      </p>
      <div class="container">
        {clothes.map((el, i) => (
          <ClotheBlock
            key={i}
            title={el.clothes_title}
            image={el.img}
            subtitle={el.clothes_sub_title}
          ></ClotheBlock>
        ))}
      </div>
    </section>
  );
};

export default ClothesForYou;
