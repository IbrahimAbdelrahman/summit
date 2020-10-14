import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./session.css";
function Session() {
  const agenda = [
    {
      startDate: new Date(2020, 9, 13, 9),
      ednDate: new Date(2020, 9, 13, 12),
      src:
        "https://vodafonetube.qumucloud.com/asset/fktMIqLW0pl.m3u8?delivery=CDN_DOWNLOAD&format=hls_default",
    },
    {
      date: new Date(2020, 9, 14, 9),
      ednDate: new Date(2020, 9, 14, 12),
      src:
        "https://vodafonetube.qumucloud.com/asset/fktMIqLW0pl.m3u8?delivery=CDN_DOWNLOAD&format=hls_default",
    },
    {
      date: new Date(2020, 9, 15, 9),
      ednDate: new Date(2020, 9, 15, 12),
      src:
        "https://vodafonetube.qumucloud.com/asset/fktMIqLW0pl.m3u8?delivery=CDN_DOWNLOAD&format=hls_default",
    },
  ];
  let videoRef = React.createRef();
  const [videoSource, setVideoSrc] = useState();
  const [videoTime, setVideoStart] = useState(0);
  useEffect(() => {
    if (window.location.href.includes("/1")) {
      console.log(window.location.href);
      checkLog(agenda[0]);
    } else if (window.location.href.includes("/2")) {
      checkLog(agenda[1]);
    } else if (window.location.href.includes("/3")) {
      checkLog(agenda[2]);
    }
    // Update the document title using the browser API
  });
  // Calculate the difference between the loggedInDate and the startDate of eventobj to forward the video till this point
  function diff_secs(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    console.log(new Date(diff * 1000).toISOString().substr(11, 8));
    return Math.abs(Math.round(diff));
  }
  // Check if loggedInDate is greater, smaller than the endDate of the eventObject
  const checkLog = (eventObj) => {
    var loggedInDate = new Date();

    if (loggedInDate < eventObj.ednDate) {
      if (loggedInDate === eventObj.startDate) {
        setVideoSrc(eventObj.src);
      } else if (loggedInDate > eventObj.startDate) {
        setVideoSrc(eventObj.src);
        setVideoStart(diff_secs(loggedInDate, eventObj.startDate));
      } else {
        alert(
          "your session doesn't start yet, you can go to break room till the session start"
        );
      }
    } else {
      alert("Your session has finished, we are eager to see you tomorrow ");
    }
  };

  function startSession(player) {
    if (player.getCurrentTime() === 0) {
      videoRef.current.seekTo(videoTime, "seconds");
      player.isPlaying = true;
    }
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <ReactPlayer
          ref={videoRef}
          playing={true}
          onReady={startSession}
          url={videoSource}
          autoPlay={true}
          className="videoStyle"
          width="100%"
          height="100%"
        />
        <div className="bg-info chatBot">chatBot</div>
      </div>
    </div>
  );
}

export default Session;
