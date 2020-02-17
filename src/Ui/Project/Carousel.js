import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
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
        </div>
      </div>
    );
  }
}
