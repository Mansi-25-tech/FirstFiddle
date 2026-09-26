import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OurTeam() {
  return (
    <>
      <Navbar />

      {/* Team Banner */}
      <div className="container-fluid cccccc">
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
              MEET THE TEAM
            </h1>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>

      {/* Priyank Sukhija */}
      <div className="container">
        <h2 className="a">
          MEET <b style={{ color: "orange" }}>OUR TEAM</b>
        </h2>

        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img
              src="https://pn-paul.netlify.app/image/about-priyank.jpg"
              alt="Priyank Sukhija"
              className="w-100"
            />
          </div>

          <div className="col-md-7">
            <h2>PRIYANK SUKHIJA</h2>

            <h5 style={{ color: "orange" }}>
              C.E.O. & M.D.
            </h5>

            <p className="b">
              A 19-year-old dropout kid, who was just setting up his first
              venture, envisioned what nobody thought would make him a
              business tycoon in the hospitality industry. Once he began,
              there was no stopping this entrepreneur from reaching the
              heights he has reached today. It is the passion and creative
              streak of Priyank Sukhija that has made him the most
              watched-out restaurateur of today’s time.
            </p>

            <p className="b">
              Coming from a family of lawyers, he ventured into the business
              world on his own with Lazeez Affaire in 1999 and has never
              looked back since.
            </p>

            <button className="btn btn-warning">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="container my-5">
        <div className="row">

          {/* Y.P. Ashok */}
          <div className="col-md-4 mb-4">
            <div className="photo1"></div>

            <div className="text-center mt-3">
              <h4>Y. P. ASHOK</h4>
              <p style={{ color: "orange" }}>Chairman</p>
            </div>
          </div>

          {/* B.R. Sachdeva */}
          <div className="col-md-4 mb-4">
            <div className="photo2"></div>

            <div className="text-center mt-3">
              <h4>B.R. SACHDEVA</h4>
              <p style={{ color: "orange" }}>
                Director Finance & Legal
              </p>
            </div>
          </div>

          {/* Sagar Bajaj */}
          <div className="col-md-4 mb-4">
            <div className="photo3"></div>

            <div className="text-center mt-3">
              <h4>SAGAR BAJAJ</h4>
              <p style={{ color: "orange" }}>
                Corporate Chef
              </p>
            </div>
          </div>

          {/* Jay Shankar Natraj */}
          <div className="col-md-6 mb-4">
            <div className="photo4"></div>

            <div className="text-center mt-3">
              <h4>JAY SHANKAR NATRAJ</h4>
              <p style={{ color: "orange" }}>
                Franchise Lead
              </p>
            </div>
          </div>

          {/* Vibhuti Sood */}
          <div className="col-md-6 mb-4">
            <div className="photo5"></div>

            <div className="text-center mt-3">
              <h4>VIBHUTI SOOD</h4>
              <p style={{ color: "orange" }}>
                PR And Communications Head
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default OurTeam;