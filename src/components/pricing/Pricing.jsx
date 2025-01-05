import React from "react";
import "./Pricing.css";
export default function Pricing() {
  const widthWindow = window.innerWidth <= 768;
  return (
    <section className="pricing">
      <div className="pricing__container">
        <div className="pricing__top">
          <h2 className="pricing__title">Affordable pricing</h2>
          <h3 className="pricing__subtitile">
            Bill me <span>monthly</span> • yearly
          </h3>
        </div>
        <div className="pricing__bottom">
          <div className="pricing__item">
            <div className="pricing__item-text">
              <h2 className="pricing__item-title">Like a pussy</h2>
              <h3 className="pricing__item-price">
                <span>Free</span> / forever
              </h3>
              <ul className="pricing__item-list">
                <li className="pricing__item-li">Components-driven system</li>
                <li className="pricing__item-li">
                  Sales-boosting landing pages
                </li>
                <li className="pricing__item-li">Awesome Feather icons pack</li>
              </ul>
            </div>

            <a href="/#" className="pricing__item-button">
              Login
            </a>
          </div>

          <div className="pricing__item">
            <div className="pricing__item-text">
              <div className="pricing__iitem-title-box">
                <h2 className="pricing__item-title">👤 Individual</h2>
                <span className="pricing__iitem-best">best!</span>
              </div>

              <h3 className="pricing__item-price">
                <span>$24 </span>/ month
              </h3>
              <ul className="pricing__item-list">
                <li className="pricing__item-li">Components-driven system</li>
                <li className="pricing__item-li">
                  Sales-boosting landing pages
                </li>
                <li className="pricing__item-li">Awesome Feather icons pack</li>
                <li className="pricing__item-li">
                  Themed into 3 different styles
                </li>
                <li className="pricing__item-li">Will help to learn Figma</li>
              </ul>
            </div>

            <a href="/#" className="pricing__item-button">
              Regular license
            </a>
          </div>
          <div className="pricing__item">
            <div className="pricing__item-text">
              <h2 className="pricing__item-title">👥 Corporate</h2>
              <h3 className="pricing__item-price">
                <span>$12</span> / editor
              </h3>
              <ul className="pricing__item-list">
                <li className="pricing__item-li">Components-driven system</li>
                <li className="pricing__item-li">
                  Sales-boosting landing pages
                </li>
                <li className="pricing__item-li">Awesome Feather icons pack</li>
                <li className="pricing__item-li">
                  Themed into 3 different styles
                </li>
              </ul>
            </div>

            <a href="/#" className="pricing__item-button">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
