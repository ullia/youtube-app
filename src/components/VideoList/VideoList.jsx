import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Video.scss";
import VideoItem from "./VideoItem";

function VideoList({ videos, bgcolor }) {
  let videoRef = useRef([]);

  useEffect(() => {
    console.log(videoRef);
    console.log(videoRef.current);
    gsap.from(videoRef.current, { opacity: 0, y: 50, stagger: 0.2 });
  }, [videos]);

  return (
    <ul className="video_list">
      {videos &&
        videos.map((item, index) => (
          <VideoItem
            key={item.id}
            ref={el => {
              videoRef.current[index] = el;
            }}
            className="video_item"
            video={item}
            bgcolor={bgcolor}
          />
        ))}
    </ul>
  );
}

export default VideoList;
