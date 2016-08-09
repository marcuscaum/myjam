import React from "react";

import SongRequest from "./SongRequest";

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SongRequest/>
      </div>
    );
  }
}
