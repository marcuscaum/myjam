import React from "react";
import SongList from "./SongList";

export default class SongRequest extends React.Component {

  constructor() {
    super();
    this.state = {
      songs: [],
      videoURL: ''
    };
  }

  onChange(e) {
    this.setState({videoURL: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.videoURL) {
      var nextSongs = this.state.songs.concat([{
        video_url: this.state.videoURL
      }]);
      this.setState({
        songs: nextSongs,
        videoURL: ''
      });
    };
  }

  render() {
    return (
      <div>
        <div id="song-list">
          <SongList items={this.state.songs} />
        </div>
        <form onSubmit={ this.handleSubmit.bind(this) } id="song-request">
          <input type="text" placeholder="What is your jam?" onChange={ this.onChange.bind(this) } value={ this.state.videoURL }/>
          <input type="submit" value="xunda" />
        </form>
      </div>
    );
  }
}
