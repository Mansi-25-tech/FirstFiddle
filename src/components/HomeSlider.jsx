import React from "react";

function HomeSlider() {
  return (
    <div
      id="abc"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#abc"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#abc"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        <div
          className="carousel-item active"
          data-bs-interval="4000"
        >
          <img
            src="https://pn-paul.netlify.app/image/slider1.jpg"
            alt="First Fiddle"
            className="w-100"
          />
        </div>

        <div
          className="carousel-item"
          data-bs-interval="4000"
        >
          <img
            src="https://pn-paul.netlify.app/image/slidwr33.jpg"
            alt="First Fiddle"
            className="w-100"
          />
        </div>

      </div>
    </div>
  );
}

export default HomeSlider;