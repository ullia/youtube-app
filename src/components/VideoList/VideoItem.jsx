import React, { useState, forwardRef } from "react";
import "./Video.scss";

const VideoItem = forwardRef(({ video, bgcolor }, ref) => {
  const [selected, setSelected] = useState(false);

  // useEffect(() => {
  //   gsap.from(ref.current, { opacity: 0, y: 50, tagged: 0.5 });
  // }, []);

  const handleSelectVideo = () => {
    // setSelected(!selected);
    console.log(ref.current);
    setSelected(!selected);
  };

  const timeForToday = value => {
    // console.log(value);
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };

  const bgcolorLoop = () => {};

  return (
    <li
      ref={ref}
      className={"video_item " + (selected ? "selected" : "")}
      onClick={() => {
        handleSelectVideo();
        // selectInit();
      }}
    >
      <div className="item_thumb">
        {selected ? (
          <iframe
            title={video.snippet.title}
            className="videoframe"
            type="text/html"
            width="100%"
            height="240"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <img src={video.snippet.thumbnails.high.url} alt="" />
        )}
      </div>
      <div className="item_info">
        <h3>
          <span className="coloricon" style={{ backgroundColor: bgcolorLoop() }}></span>
          {video.snippet.title}
        </h3>
        <p>{video.snippet.channelTitle}</p>
        {/* <p>{video.snippet.publishedAt.replace("T", " ").slice(0, 10)}</p> */}
        <p>{timeForToday(video.snippet.publishedAt)}</p>
        {selected && (
          <h4>
            {video.snippet.description.length < 100
              ? video.snippet.description
              : video.snippet.description.slice(0, 100) + "..."}
          </h4>
        )}
      </div>
    </li>
  );
});

export default VideoItem;
