import React from "react";

export const CarouselItem = ({ imageUrl, width }) => {
  // { console.log(imageUrl)}
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img className="carousel-img stay-preview-image" src={imageUrl} />
    </div>
  )
}


