import React from "react";

import SongList from "./SongList";
import Player from "./Player";

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

  componentDidMount() {
    var _this = this;
    this.serverRequest = $.get("https://api-myjam.herokuapp.com/videos/")
      .then(function(result) {    
        _this.setState({
          songs: result
        });
      })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.videoURL) {

      var nextSongs = this.state.songs.concat([{
        video_url: this.videoID()
      }]);

      this.setState({
        songs: nextSongs,
        videoURL: ''
      });

      this.saveRequest(
        {
          video: {
            title: 'xunda',
            url: this.videoID(),
            upvote: 0
          }
        })
    };
  }

  videoID() {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = this.state.videoURL.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }

  saveRequest(data) {
    $.ajax({
      type: "POST",
      url: "https://api-myjam.herokuapp.com/videos/",
      data: JSON.stringify(data),
      dataType: 'json',
      success: function(msg){
        alert( "Data Saved: " + msg );
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("some error");
      }
    });
  }

  render() {
    return (
      <div>
        <Player video={ this.state.songs[this.state.songs.length - 1] } />
        <div id="song-request">
          <SongList items={ this.state.songs } />
          <form onSubmit={ this.handleSubmit.bind(this) }>
            <input type="text" placeholder="What is your jam?" onChange={ this.onChange.bind(this) } value={ this.state.videoURL }/>
            <input type="submit" value="xunda" />
          </form>
        </div>
      </div>
    );
  }
}
