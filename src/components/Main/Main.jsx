import React from "react";
import BestSelling from "./Sections/Best_Selling/BestSelling";
import OurProducts from "./Sections/Our_Products/OurProducts";
import ExclusiveOffer from "./Sections/Exclusive_Offer/ExclusiveOffer";
import ClothesForYou from "./Sections/Clothes_For_You/ClothesForYou";
import FeedbackCorner from "./Sections/Feedback_Corner/FeedBackCorner";


const Main = () => {
  return (
    <div>
      <BestSelling></BestSelling>
      <OurProducts></OurProducts>
      <ExclusiveOffer></ExclusiveOffer>
      <ClothesForYou></ClothesForYou>
      <FeedbackCorner></FeedbackCorner>
    </div>
  )
}

export default Main;