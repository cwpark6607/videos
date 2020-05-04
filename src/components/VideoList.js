import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const redenderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="ui relaxed divided list">{redenderedList}</div>;
};

export default VideoList;
