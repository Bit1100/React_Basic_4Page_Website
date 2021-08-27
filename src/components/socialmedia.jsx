import React, { Component } from "react";
import { images } from "../App.jsx";

class SocialMedia extends Component {
  render() {
    return (
      <>
        <div className="heading center my-2">Share our Website</div>
        <div className="social-media my-1">
          {images.map((image) => {
            return (
              <div key={image} className="social-media-item">
                <img src={image} alt="Social Media" />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default SocialMedia;
