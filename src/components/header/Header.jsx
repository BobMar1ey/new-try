import React, { useState } from "react";
import "./Header.css";
import squer from "../../img/header/squer.png";
import grid from "../../img/header/grid.png";

export default function Header() {
  const [burger, setBurger] = useState("");
  const mobile = window.innerWidth <= 767;
  const arr = ["How it works", "Who we are", "What we do", "Contact us"];
  return (
    <header className="header">
      <div className={`header__container ${mobile ? "mobile" : ""}`}>
       
        <div className="header__log-box">
        {mobile ? (
          <div
            className={`header__burger ${burger ? "active" : ""}`}
            onClick={() => setBurger(!burger)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          ""
        )}
          {mobile ? "" : <img src={squer} alt="squer" />}
          <img src={grid} alt="grid" />
        </div>
        <nav className={`header__nav ${burger ? "active" : ""}`}>
          <ul className="header__list">
            {arr.map((item, index) => (
              <React.Fragment key={index}>
                <li className="header__item">
                  <a href="/#" className="header__link">
                    {item}
                  </a>
                </li>
                <span></span>
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <a href="" className="header__button">
          Sign In
        </a>
      </div>
    </header>
  );
}
