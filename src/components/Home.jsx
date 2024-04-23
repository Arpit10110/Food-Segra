import React from "react";
import "../style/Home.css";
import { cardData } from "./provideCard.js";
//assets
import section1Home from "../assets/section1Home.png";
import section2intro1 from "../assets/section2intro1.png";
import section2intro2 from "../assets/section2intro2.png";
import section2intro3 from "../assets/section2intro3.png";
import Video from "../assets/video.mp4";
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="section1">
          <div className="section1Cont">
            <p>
              “Join us in our mission to rescue surplus food, unite communities,
              and nourish those in need.”
            </p>
            <button>Get Started</button>
          </div>
          <div className="sectionImg">
            <img src={section1Home} alt="section1Home" />
          </div>
        </div>
        <div className="section2">
          <div className="mixsec1-2Box">
            <div className="introbox">
              <img src={section2intro1} alt="section2intro1" />
              <div className="introCont">
                <h1>68.9M</h1>
                <p>tons of food waste anually in India</p>
              </div>
            </div>
            <div className="introbox">
              <img src={section2intro2} alt="section2intro1" />
              <div className="introCont">
                <h1>2nd</h1>
                <p>India is on 2nd position on Food waste</p>
              </div>
            </div>
            <div className="introbox">
              <img src={section2intro3} alt="section2intro1" />
              <div className="introCont">
                <h1>111 th</h1>
                <p>India is on 111th position on Hunger Index</p>
              </div>
            </div>
          </div>
          <video src={Video} autoPlay muted loop />
        </div>
        <div className="section3">
          <h2>What we Provides to you</h2>
          <div className="cardDiv">
            {cardData.map((i,index) => {
              return (
                <div key={index} className="card">
                  <img src={i.img} alt="" />
                  <h4>{i.title}</h4>
                  <p>{i.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="section4">
          <h1>How we Segregate your foods</h1>
          <div className="Section4intro">
            <h1>Trader will check the quality of food</h1>
            <div className="segrateOption">
                  <div className="optionBox">
                    <h3>Needy People</h3>
                    <p>If that food is eatable or the quality of food is good then we should give that food to hungry people and needy people.</p>
                  </div>
                  <div className="optionBox">
                    <h3>Cattles</h3>
                    <p>If that food is not fit for human consumption then we can give that food to cattle.</p>
                  </div>
                  <div className="optionBox">
                    <h3>Use as Manure</h3>
                    <p>If that food is neither suitable for humans to eat nor for cattle to eat, then we will use that food to make manures.</p>
                  </div>
            </div>
          </div>
        </div>
        <div className="section5">
          <div className="subDiv">
            <div className="subinnerDiv">
            <h3>Subscribe to Food Segra</h3>
            <div className="inputSubDiv">
              <input type="Email" placeholder="Enter your Email" />
              <button>Subscribe</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
