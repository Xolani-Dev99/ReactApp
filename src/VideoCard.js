import React from 'react';

const VideoCard = ({ video }) => {
  const { title } = video.snippet;
  const videoId = video.id.videoId;

  return (
    <div className="video-card">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
      />
      <h4>{title}</h4>
    </div>
  );
};

export default VideoCard;
