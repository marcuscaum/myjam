import React from "react";

export default class Player extends React.Component {

  render() {
    return (
      <div id="player">
        <iframe frameborder="0" allowfullscreen="1" width="1920" height="1080" 
          src={ "https://www.youtube.com/embed/" + (this.props.video ? this.props.video.url : '') + "?controls=0&amp;showinfo=0&amp;modestbranding=1&amp;wmode=transparent&amp;enablejsapi=1&amp;autoplay=1&amp;widgetid=1" }>
        </iframe>
      </div>
    )
  }
}
