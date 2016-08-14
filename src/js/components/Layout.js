import React from "react";

import SongRequest from "./SongRequest";

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div class="container">
          <header>
            <h1> Hello, this is <span class="logo">myjam</span>!</h1>
          </header>
          <SongRequest/>
        </div>
      </div>
    );
  }
}
