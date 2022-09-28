// youtube api 통신하는 필요한 기능을 정의
// constructor의 key는 youtube api key 이다.
// key는 index.js 에서 생성한 Youtube 인스턴스에서 인자로 env 파일에서 받아온다.

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=kr&key=${this.key}`,
      this.getRequestOptions,
    );
    const result = await response.json();
    return result.items;
    // .then(result => setVideos(result.items));
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions,
    );
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
    // .then(items => setVideos(items));
  }
}

export default Youtube;
