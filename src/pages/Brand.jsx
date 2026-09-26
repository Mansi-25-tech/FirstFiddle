import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Brand() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container-fluid cccc">
        <div className="row">
          <div className="col-md-2"></div>

          <div
            className="col-md-8 text-white"
            style={{ paddingTop: "140px" }}
          >
            <h1
              className="text-center"
              style={{
                fontSize: "1.5cm",
                marginTop: "4cm",
                fontFamily: "prague",
              }}
            >
              BRAND
            </h1>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>

      {/* Brand Images */}
      <div className="container">

        {/* Row 1 */}
        <div className="row">
          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/logo-resize-04-700x466.jpg"
              alt="Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/logo-resize-07-700x466.jpg"
              alt="Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/Untitled-design-min.jpg"
              alt="Brand"
              className="w-100"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/444444.png"
              alt="Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/555555555555555555.jpg"
              alt="Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/666666666666.jpg"
              alt="Brand"
              className="w-100"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/7777.jpg"
              alt="Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/88888888.jpg"
              alt="Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/99999999.jpg"
              alt="Brand"
              className="w-100"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/100000000.jpg"
              alt="Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/01111.png"
              alt="Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/012222.jpg"
              alt="Brand"
              className="w-100"
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="row">
          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/bougie.jpeg"
              alt="Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/01444.png"
              alt="Brand"
              className="w-100"
            />
          </div>

          <div className="col-md-4 mb-3 mt-3">
            <img
              src="https://pn-paul.netlify.app/image/0155555555.png"
              alt="Brand"
              className="w-100"
            />
          </div>
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Brand;