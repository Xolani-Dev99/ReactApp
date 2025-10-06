import React, { useState, useEffect } from 'react';
import './index.css';
import { fetchVideos } from './api';
import VideoGrid from './VideoGrid';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const loadVideos = async () => {
      const query = `${search} ${category}`.trim();
      const vids = await fetchVideos(query);
      setVideos(vids);
    };
    loadVideos();
  }, [search, category]);

  return (
    <div className="app">
      <h1>All Your Programming Languages</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search videos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="html">HTML</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
          <option value="python">Python</option>
        </select>
      </div>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default App;
