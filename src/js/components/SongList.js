import React from "react";

export default class SongList extends React.Component {
  
  render() {
    var createItem = (item, index) => {
      return <li key={ index }>{item.title}</li>;
    };
    if (this.props.items.length) {
      return (
        <div id="song-list">
          <ul>{ this.props.items.map(createItem) }</ul>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}
