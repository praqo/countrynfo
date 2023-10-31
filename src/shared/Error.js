import React from "react";
import image from "./world.png";

function Error() {
  return (
    <div className="error-page">
      <div className="container">
        <div className="inner-error">
          <h4 class="error-title">Page Not Found</h4>
          <img src={image} alt="world map" className="error-image" />
        </div>
      </div>
    </div>
  );
}

export default Error;
