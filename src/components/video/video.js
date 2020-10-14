import React from "react";
import { useHistory } from "react-router-dom";
import "./video.css";

function Video(props) {
  let videoRef = React.createRef();
  let history = useHistory();

  const redirectAfterEnd = () => {
    if (window.location.href.includes("/player")) history.push("/hall");
    else history.push("/player");
  };
  console.log(props);
  return (
    <video
      ref={videoRef}
      className="myVideo"
      autoPlay
      src={props.videoSource}
      onEnded={() => redirectAfterEnd()}
      type={props.videoType}
    />
  );
}

export default Video;
