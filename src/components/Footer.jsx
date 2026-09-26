import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-5 text-center">
              <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" />
            </div>
            <div className="col-md-7">
              <h1 className="text-light mt-4 f"> <b style={{ color: "orange" }}>CONTACT</b> US</h1>
              <p className="g">We're a team focusing on redefining the way the hospitality industry works by bringing
                in concept
                based restaurants across India. We are truly committed to catering to the ever-changing
                cosmopolitan taste of the customer and revolutioning the F & B industry!</p>
              <div className="row">
                <div className="col-md-6">
                  <h6 className="f" style={{ color: "orange" }}>Address</h6>
                  <p className="text-light">S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park, New
                    Delhi, Delhi 110017
                  </p>
                </div>
                <div className="col-md-6">
                  <h6 className="f" style={{ color: "orange" }}>Enquiry</h6>
                  <p className="text-light">Email: customercare@firstfiddle.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6 text-light">
            <p className="mt-3" style={{ fontWeight: 250 }}>EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS |
              BLOG
              | APP
              <b style={{ fontWeight: 250, marginLeft: "2.5cm" }} className="foot">COPYRIGHT © 2025 FIRST FIDDLE
                F&amp;B
                PRIVATE LIMITED </b>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer