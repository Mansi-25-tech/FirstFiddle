import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Carrers() {
  return (
    <>
      <Navbar />

      {/* Careers Banner */}
      <div className="container-fluid careers-banner">
        <div className="careers-banner-content">
          <h1>CAREERS</h1>
        </div>
      </div>

      {/* Come Work With Us */}
      {/* Come Work With Us */}
<div className="container">
  <h2 className="a">
    COME WORK <span className="yellow-text">WITH US!</span>
  </h2>
  <hr />

  <p className="b">
    First Fiddle is all about innovation, creativity and understanding
    ever-changing consumer needs. The work environment enables both
    professional and personal growth.
  </p>
</div>
      {/* How To Apply */}
      <div className="container mt-5">
        <h2 className="a">
    HOW TO <span className="yellow-text">APPLY!</span>
  </h2>
        <hr />

        <p className="b">
          First Fiddle is all about innovation, creativity and understanding
          ever-changing consumer needs. The work environment enables both
          professional and personal growth
        </p>

        <div className="row mt-5">

          {/* Steep Learning Curve */}
          <div className="col-md-4">
            <h4>Steep learning curve</h4>

            <p className="b">
              Talent and merit are rewarded at First Fiddle Restaurants.
              Add value, and see yourself grow!
            </p>
          </div>

          {/* Growth Opportunities */}
          <div className="col-md-4">
            <h4>Growth opportunities</h4>

            <p className="b">
              Talent and merit are rewarded at First Fiddle Restaurants.
              Add value, and see yourself grow!
            </p>
          </div>

          {/* Exciting Work Environment */}
          <div className="col-md-4">
            <h4>Exciting work environment</h4>

            <p className="b">
              Work in a highly motivated environment with talented people.
              A positive work environment, ensures a productive and happy you.
            </p>
          </div>

        </div>
      </div>

      {/* Share Your Details */}
      <div className="container mt-5 mb-5">

        <h5>Share your Details</h5>

        <form>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name:
            </label>

            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email:
            </label>

            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Your Phone:
            </label>

            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Phone"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>

            <textarea
              id="message"
              className="form-control"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-dark">
            Submit
          </button>

        </form>
      </div>

      <Footer />
    </>
  );
}

export default Carrers;