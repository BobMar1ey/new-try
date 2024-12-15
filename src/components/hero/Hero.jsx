import React from "react";
import "./Hero.css";
import smallOne from "../../img/hero/3.png";
import smallTwo from "../../img/hero/4.png";
import smallThree from "../../img/hero/7.png";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__top">
          <h1 className="hero__title">
            Combine <span>fine</span> images
          </h1>
          <h2 className="hero__subtitle">To represent a product</h2>
        </div>
        <div className="hero__bottom">
          <div className="hero__column">
            <p className="hero__text">
              Use mixed grid with imagery, replace with your own photos and
              descriptions
            </p>
            <div className="hero__img-box">
              <h2 className="hero__img-title">
                We aimed to deliver HQ templates for Figma
              </h2>
              <p className="hero__img-subtitle">Used by 123 people</p>
            </div>
            <a href="/#" className="hero__button">
              Learn more
            </a>
          </div>
          <div className="hero__column">
            <div className="hero__column-small">
              <div className="hero__img-box">
                <h2 className="hero__big-title">Consider it done!</h2>
              </div>
              <div className="hero__img-small-row">
                <p className="hero__text">
                  This is multipurpose grid, it fits for portfolio, services or
                  agency web site
                </p>
                <img src={smallOne} alt="" className="hero__img-small" />
                <img src={smallTwo} alt="" className="hero__img-small" />
              </div>
            </div>
            <div className="hero__column-small">
              <div className="hero__img"></div>
              <div className="hero__img">
                <h2 className="hero__img-title">See my goal?</h2>
              </div>
              <img src={smallThree} alt="" className="hero__img-small" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
