import React, { Component } from "react";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="logo">
          <a href="/">
            <img
              className="logo__img"
              src="https://fontmeme.com/permalink/200213/f7ebed630e5c7731685efda4ad7410c4.png"
              alt="netflix-font"
              border="0"
            ></img>
          </a>
        </div>

        <ul className="menu">
          <li className="menu__item">
            <a href="google.com" target="_blank">
              Projects
            </a>
          </li>
          <li className="menu__item">
            <a href="google.com" target="_blank">
              Resume
            </a>
          </li>
        </ul>

        <ul className="social">
          <li className="menu__item">Github</li>
          <li className="menu__item">Linkedin</li>
        </ul>
      </nav>
    );
  }
}
