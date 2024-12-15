import React from "react";
import "./Delivering.css";
import call from "../../img/delivering/call.png";
import like from "../../img/delivering/like.png";
import time from "../../img/delivering/time.png";
import zap from "../../img/delivering/zap.png";
import "./Delivering";
export default function Delivering() {
  return (
    <section className="delivering">
      <div className="delivering__container">
        <h2 className="delivering__title">
          Delivering good designs since 1954 🚚💨
        </h2>
        <h3 className="delivering__subtilte">
          We’re the first multi-purpose design kit solutions for businesses. We
          help you bridge gaps between your layouts, templates and developers to
          empower all involved.
        </h3>
        <div className="delivering__row">
          <div className="delivering__item">
            <img src={call} alt="call" className="delivering__item-img" />
            <h3 className="delivering__item-title">Support</h3>
            <p className="delivering__item-text">
              Delivering faster and more personalized support with shared
              screens and cool design systems for Figma
            </p>
            <a href="" className="delivering__item-button">
              Learn more
            </a>
          </div>
          <div className="delivering__item">
            <img src={like} alt="call" className="delivering__item-img" />
            <h3 className="delivering__item-title">Support</h3>
            <p className="delivering__item-text">
              Delivering faster and more personalized support with shared
              screens and cool design systems for Figma
            </p>
            <a href="" className="delivering__item-button">
              Learn more
            </a>
          </div>
          <div className="delivering__item">
            <img src={time} alt="call" className="delivering__item-img" />
            <h3 className="delivering__item-title">Support</h3>
            <p className="delivering__item-text">
              Delivering faster and more personalized support with shared
              screens and cool design systems for Figma
            </p>
            <a href="" className="delivering__item-button">
              Learn more
            </a>
          </div>
          <div className="delivering__item">
            <img src={zap} alt="call" className="delivering__item-img" />
            <h3 className="delivering__item-title">Support</h3>
            <p className="delivering__item-text">
              Delivering faster and more personalized support with shared
              screens and cool design systems for Figma
            </p>
            <a href="" className="delivering__item-button">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
