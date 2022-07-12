import React from "react";
import "./VideoCard.css";


function VideoCard(props) {
  return (
    <div className="video-card-container">
      
        <iframe
          src={`https://www.youtube.com/embed/${props.videoID}`}
          title="video"

        />
      
        <h6 className="video-card-title mt-2">
          {props.title}
        </h6>
        
        <p className="video-card-description">{props.description}</p>
        <div className="img-title-name">
        <img src={props.logoID} alt='logo' height='50px' width='50px'className="channel-logo"/>&nbsp;&nbsp;&nbsp;&nbsp;
        <h6 className="video-card-channel">{props.channel}</h6>
        </div>
      
    </div>
  );
}

export default VideoCard;
