import React from "react";
import play from "../../asset/images/play.2de1de.svg";
import poster from "../../asset/video/video-poster.png";
import Video1 from "../../asset/video/VantageSportsPromo_FC2.mp4";
export const Video = () => {
  return (
    <div>
      <div className="video-presentation">
        <video id="video" width="100%" height="auto" poster={poster}>
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button type="button" className="btn btn-play">
          <img src={play} className="img-fluid" alt="play icon" />
        </button>
      </div>
    </div>
  );
};
