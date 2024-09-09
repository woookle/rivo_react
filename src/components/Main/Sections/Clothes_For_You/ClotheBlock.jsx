import React from "react";

const ClotheBlock = (props) => {
  return (
    <div class="clothes_block">
      <img src={require(`../../../../${props.image}`)} alt="clothes_for_you" />
      <p class="clothes_block_title">{props.title}</p>
      <p class="clothes_block_sub_title">{props.subtitle}</p>
    </div>
  );
};

export default ClotheBlock;