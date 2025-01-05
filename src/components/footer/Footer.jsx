import React from "react";
import facebook from "../../img/footer/facebook.png";
import twitter from "../../img/footer/twitter.png";
import slack from "../../img/footer/slack.png";
import linkedin from "../../img/footer/linkedin.png";
import wave from "../../img/footer/Wave.svg";
import "./Footer.css";

export default function Footer() {
  const widthW = window.innerWidth <= 768;
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <ul className="footer__list">
            <li className="footer__top-item">
              <a href="#" className="footer__top-link">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="footer__top-item">
              <a href="#" className="footer__top-link">
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li className="footer__top-item">
              <a href="#" className="footer__top-link">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className="footer__top-item">
              <a href="#" className="footer__top-link">
                <img src={slack} alt="slack" />
              </a>
            </li>
          </ul>
          <a href="#" className="footer__top-web">
            hello@fapsterapp.com
          </a>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-list">
            <a href="/#" className="footer__bottom-link">
              About Fapster app
            </a>
            <a href="/#" className="footer__bottom-link">
              Get in Touch
            </a>
            <a href="/#" className="footer__bottom-link">
              Things We Like
            </a>
            <a href="/#" className="footer__bottom-link">
              Onhovered / Active
            </a>
            <a href="/#" className="footer__bottom-link">
              Privacy Policy
            </a>
            <a href="/#" className="footer__bottom-link">
              Terms of Service
            </a>
            <a href="/#" className="footer__bottom-link">
              We are hiring!
            </a>
            <a href="/#" className="footer__bottom-link">
              Resources
            </a>
          </div>
          <form action="https://formsubmit.co/gladium1992@gmail.com" method="POST" className="footer__form">
            <div className="form__row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input__name"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input__email"
              />
            </div>
            <div className="form__bottom-row">
              <textarea
                name="textarea"
                className="input__textarea"
                id=""
                placeholder="leave your massage"
              ></textarea>
              <button type="submit" className="input__button">
                SEND
              </button>
            </div>
          </form>
          <img src={wave} alt="" />
        </div>
      </div>
    </footer>
  );
}
