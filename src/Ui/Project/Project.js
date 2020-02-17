import React, { Component } from "react";
import "./Project.scss";

export default class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="details">
          <div className="txt">
            <h1>Project Name</h1>
            <p>
              Veniam veniam ullamco veniam aliqua qui. Pariatur adipisicing
              eiusmod ut sit nulla labore excepteur aliqua. Incididunt cupidatat
              officia dolor irure magna tempor fugiat ad. Nisi cillum nostrud
              nisi consectetur. Qui fugiat esse non aliqua ut ad mollit culpa ex
              aliquip Lorem laborum deserunt. Elit deserunt ipsum reprehenderit
              voluptate culpa laborum adipisicing eu occaecat id.
            </p>
            <div className="chips">
              <div className="tech">
                <span className="btn--green">VueJS</span>
                <span className="btn--magenta">SCSS</span>
                <span className="btn--blue">SQL</span>
              </div>
              <div className="options">
                <a className="btn" href="google.com">
                  &lt;/&gt;
                </a>
                <a className="btn" href="google.com">
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero"></div>

        <div className="carousel">
          <h2 className="carousel__title">My Projects</h2>
          <div className="carousel__container">
            <div className="carousel__item">
              <div className="data">
                <h3 className="data__title">Project Name</h3>
                <p className="data__sinopsis hide">
                  Dolor ex voluptate sit id sunt Lorem tempor cillum.
                </p>
                <div className="data__options hide">
                  <a className="btn preview" href="google.com">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel__item">
              <div className="data">
                <h3 className="data__title">Project Name</h3>
                <p className="data__sinopsis hide">
                  Dolor ex voluptate sit id sunt Lorem tempor cillum.
                </p>
                <div className="data__options hide">
                  <a className="btn preview" href="google.com">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel__item">
              <div className="data">
                <h3 className="data__title">Project Name</h3>
                <p className="data__sinopsis hide">
                  Dolor ex voluptate sit id sunt Lorem tempor cillum.
                </p>
                <div className="data__options hide">
                  <a className="btn preview" href="google.com">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel__item">
              <div className="data">
                <h3 className="data__title">Project Name</h3>
                <p className="data__sinopsis hide">
                  Dolor ex voluptate sit id sunt Lorem tempor cillum.
                </p>
                <div className="data__options hide">
                  <a className="btn preview" href="google.com">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel__item">
              <div className="data">
                <h3 className="data__title">Project Name</h3>
                <p className="data__sinopsis hide">
                  Dolor ex voluptate sit id sunt Lorem tempor cillum.
                </p>
                <div className="data__options hide">
                  <a className="btn preview" href="google.com">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
