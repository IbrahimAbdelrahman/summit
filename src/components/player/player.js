import React, { useState, useEffect } from "react";
import Video from "../video/video";

const Player = () => {
  const [videoSource, setVideoSource] = useState();
  useEffect(() => {
    // Update the document title using the browser API
    setVideoSource("/videos/toSession.mp4");
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <Video videoSource={videoSource} />
      </div>
    </div>
  );
};

export default Player;
