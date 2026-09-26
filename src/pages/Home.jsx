import React from "react";
import Navbar from "../components/Navbar";
import HomeSlider from "../components/HomeSlider";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Home Slider */}
      <HomeSlider />

      {/* Welcome To First Fiddle */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">
          Welcome To{" "}
          <span style={{ color: "orange" }}>FIRST FIDDLE</span>
        </h2>

        <div className="row align-items-center">
          {/* Text */}
          <div className="col-md-7">
            <p className="b">
              First Fiddle Restaurants, one of India's most prominent F&B
              companies in the casual dining sector, is headed by Priyank
              Sukhija. Starting the journey from Lazeez Affair in 1999 to
              Miso Sexy and Bougie in 2022, we have created wave after wave
              in the industry with over 30+ restaurants, brands, and
              franchises across India.
            </p>

            <div className="text-center">
              <button className="btn btn-warning">
                JOIN THE JOURNEY
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-5 text-center">
            <img
              src="https://pn-paul.netlify.app/image/first.jpg"
              alt="First Fiddle"
              className="img123"
            />
          </div>
        </div>
      </div>

      {/* Media Mentions */}
      <div className="container-fluid c">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8 text-center text-white">
            <h2 className="d">
              MEDIA MENTIONS
            </h2>

            <p className="e">
              We've been making splashes and headlines since 1999 for our
              innovative concepts and aesthetic ideations, experimental
              gastronomic affairs, and exotic mixology. We've made our way
              from the heart of the country into the hearts of its people!
            </p>

            <button className="btn btn-warning mb-5 mt-5">
              Know more
            </button>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>

      {/* Explore Our Brands */}
      <div className="container my-5">
        <h2 className="text-center mb-4">
          EXPLORE{" "}
          <span style={{ color: "orange" }}>OUR BRANDS</span>
        </h2>

        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3">
            <img
              src="https://pn-paul.netlify.app/image/ffpic1.jpg"
              alt="First Fiddle Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <img
              src="https://pn-paul.netlify.app/image/ffpic2.jpg"
              alt="First Fiddle Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <img
              src="https://pn-paul.netlify.app/image/ffpic3.jpg"
              alt="First Fiddle Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <img
              src="https://pn-paul.netlify.app/image/ffpic4.jpg"
              alt="First Fiddle Brand"
              className="w-100"
            />
          </div>
        </div>
      </div>

      {/* Experience Our Concepts */}
      <div className="container-fluid c1">
        <div className="row">
          <div className="col-md-2"></div>

          <div
            className="col-md-8 text-center text-white"
            style={{ paddingTop: "140px" }}
          >
            <h2 className="d">
              EXPERIENCE OUR CONCEPTS
            </h2>

            <p className="e">
              Moving beyond just offering Indian, international, and fusion
              cuisines, our restaurants create magic with our special events,
              mood-setting music, Insta-worthy aesthetics, and
              tongue-tingling signatures! Head over to experience it for
              yourself!
            </p>

            <button className="btn btn-warning mb-5 mt-5">
              Know more
            </button>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;