import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PressRelease() {
  const offlineImages = [
    "https://pn-paul.netlify.app/image/1.png",
    "https://pn-paul.netlify.app/image/2.png",
    "https://pn-paul.netlify.app/image/3.png",
    "https://pn-paul.netlify.app/image/4.png",
    "https://pn-paul.netlify.app/image/5.png",
    "https://pn-paul.netlify.app/image/6.png",
    "https://pn-paul.netlify.app/image/7.png",
    "https://pn-paul.netlify.app/image/8.png",
  ];

  const articles = [
    {
      date: "FEB 18, 2020",
      title: "ET PRIME",
      text: "Go big, or go home: Lazeez Affaire to Lord of the Drinks, Priyank Sukhija's success recipe for dining",
      image: "https://pn-paul.netlify.app/image/et-prime.jpg",
    },
    {
      date: "JUL 16, 2018",
      title: "AIN",
      text: "First Fiddle Restaurants aims top-line growth by 2020; to opt for franchising route to expansion",
    },
    {
      date: "MAY 20, 2019",
      title: "BUSINESS LINE",
      text: "First Fiddle opens outlet in Chennai",
    },
    {
      date: "OCT 20, 2010",
      title: "BUSINESS STANDARD",
      text: "First Fiddle Restaurants aims top-line growth by 2020; to opt for franchising route to expansion",
    },
    {
      date: "NOV 20, 2018",
      title: "CHENNAI ONLINE",
      text: "Happy Hour",
    },
    {
      date: "FEB 18, 2020",
      title: "BUSINESS TODAY",
      text: "Fly High While Experiencing Newly Launched Dragonfly",
    },
    {
      date: "AUG 28, 2020",
      title: "BUSINESS WORLD",
      text: "LORD OF THE DRINKS LAUNCHES IN SOUTH INDIA WITH CHENNAI’S LARGEST RESTO-BAR",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="container-fluid ccccc">
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
              PRESS RELEASE
            </h1>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>

      {/* OFFLINE SECTION */}
      <div className="container">
        <h2 className="a">OFFLINE</h2>

        <hr />

        <div className="row">
          {offlineImages.map((image, index) => (
            <div
              className="col-md-3 col-sm-6 mb-4"
              key={index}
            >
              <img
                src={image}
                alt={`Press Release ${index + 1}`}
                className="w-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ONLINE MENTIONS */}
      <div className="container mt-5 mb-5">

        <h3
          className="text-center"
          style={{
            fontFamily: "prague",
            marginBottom: "40px",
          }}
        >
          ONLINE MENTIONS
        </h3>

        {articles.map((article, index) => (
          <div key={index}>

            {/* ARTICLE IMAGE */}
            {article.image && (
              <div className="text-center mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                  }}
                />
              </div>
            )}

            {/* DATE */}
            <p>{article.date}</p>

            {/* PUBLICATION */}
            <h4>{article.title}</h4>

            {/* ARTICLE TITLE */}
            <p>
              "{article.text}"
            </p>

            {/* READ FULL ARTICLE */}
            <p>
              <b>READ FULL ARTICLE</b>
            </p>

            <hr />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default PressRelease;