import React, { useState, useEffect } from "react";
import "./app.scss";
import Header from "./components/inc/Header";
import Search from "./components/inc/Search";
import VideoList from "./components/VideoList/VideoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(false);

  const search = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  };

  const goToHome = () => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]);

  const [itemBgColor, setItemBgColor] = useState([]);

  for (let i = 0; i < videos.length; i++) {
    const randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    itemBgColor.push(randomColor);
  }
  console.log(itemBgColor);

  // useEffect : component가 마운트/업데이트 될때마다 호출

  // 1. [] : 마운트될때 한번만 위의 콜백함수가 호출된다.
  // 2. [name] : name 데이터가 바뀔때마다 위의 콜백함수가 호출되기를 원하면 넣어준다.
  // 3. 아무것도 작성하지 않으면 마운트 될때마다 호출된다.

  return (
    <div className="app">
      <Header onLogoClick={goToHome} />
      <Search onSearch={search} />
      <VideoList videos={videos} bgcolor={itemBgColor} />
    </div>
  );
}

export default App;
