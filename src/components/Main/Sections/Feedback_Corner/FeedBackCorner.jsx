import React from "react";
import arrowLeft from "../../../../img/feedback_arrow_left.svg";
import arrowRight from "../../../../img/feedback_arrow_right.svg";
import FeedBlock from "./FeedBlock";

const FeedbackCorner = () => {
  const feeds = [
    {
      username: "Emily Wilson",
      comment: `The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!`,
    },
    {
      username: "Sarah Thompson",
      comment: `I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!`,
    },
    {
      username: "Olivia Martinez",
      comment: `I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!`,
    },
  ];

  return (
    <section class="feedback_corner">
      <p class="feed_title wow animate__animated animate__fadeInUp">Feedback Corner</p>
      <div class="container wow animate__animated animate__fadeInLeft">
        {feeds.map((el, i) => (
          <FeedBlock
            key={i}
            username={el.username}
            comment={el.comment}
          ></FeedBlock>
        ))}
      </div>
      <div class="scroll_menu wow animate__animated animate__fadeInDown">
        <div class="scroll">
          <img src={arrowLeft} alt="left" />
        </div>
        <div class="scroll">
          <img src={arrowRight} alt="right" />
        </div>
      </div>
    </section>
  );
};

export default FeedbackCorner;
