import React from "react";
import mark from '../../../../img/marks.svg';

const FeedBlock = (props) => {
  return (
    <div class="feed_block">
      <img src={mark} alt="mark" />
      <p class="feed_username">{props.username}</p>
      <p class="feed_comment">{props.comment}</p>
    </div>
  );
};

export default FeedBlock;