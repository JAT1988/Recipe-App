import React from "react";
import foodVideo from "../Assets/foodVideo.mp4";
import classes from "./Video.module.css";

function Video() {
  return (
    <div>
      <div>
        <video src={foodVideo} autoPlay loop muted></video>
      </div>

      <div className={classes.content}>
        <h3 className={classes.title}>Home made recipes Application</h3>
        <p className={classes.title}>React23K</p>
      </div>
    </div>
  );
}

export default Video;
