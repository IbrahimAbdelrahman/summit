import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Video from "../video/video";
import "./intro.css";
const Intro = () => {
  const [videoSource, setVideoSource] = useState();
  useEffect(() => {
    // Update the document title using the browser API
    setVideoSource("/videos/login.mp4");
  });
  return (
    <>
      <Video videoSource={videoSource} />
      <div className="content">
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
          phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
          maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
          latine molestiae, ad mutat oblique delicatissimi pro.
        </p>

        <NavLink to="/player" className="myBtn">
          Skip video
        </NavLink>
      </div>
    </>
  );
};

export default Intro;
