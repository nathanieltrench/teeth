import React from "react";
import stanley from "./resources/stanley.gif"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Welcome gullible web travelers!</h1>
      <h2>I'm glad you could make it!</h2>
      <img src={stanley} alt="a cute little squirrel peering at you from the tall grass"></img>
    </div>
  );
};

export default Home;


