const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = 'UC8butISFwT-Wl7EV0hUK0BQ'; // FreeCodeCamp

export const fetchVideos = async (query = '') => {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=24&q=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.items || [];
};
