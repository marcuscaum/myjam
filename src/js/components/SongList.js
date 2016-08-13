import React from "react";

export default class SongList extends React.Component {
  
  render() {
    var createItem = (item, index) => {
      return <li key={ index }>{item.video_url}</li>;
    };
    return <ul>{ this.props.items.map(createItem) }</ul>;
  }
}
