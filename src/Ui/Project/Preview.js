import React, { Component } from "react";

export default class Preview extends Component {
  render() {
    return (
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
    );
  }
}
