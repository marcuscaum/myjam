import React from "react";
import YouTube from "react-youtube";

export default class Player extends React.Component {

  constructor() {
    super();
    this.state = {
      videoTitle: ''
    }
  }

  render() {
    const opts = {
      width: '1920',
      height: '1080',
      allowFullscreen: 1,
      frameBorder: 0,
      playerVars: {
        autoplay: 1
      }
    };

    const _this = this;
    return (
      <div>
        <div id="player">
          <YouTube
            videoId={this.props.video ? this.props.video.url : ''}
            opts={opts}
            onStateChange={(e)=>{ _this.setState({ videoTitle: e.target.getVideoData().title }) }} />
        </div>
        <div id="current-song">
          <p>Jamming right now:</p>
          <h4>{ this.state.videoTitle } </h4>
        </div>
      </div>
    );
  }
}
