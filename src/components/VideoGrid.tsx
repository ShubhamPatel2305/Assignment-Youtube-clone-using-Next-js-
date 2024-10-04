import React from 'react';
import VideoCard from './VideoCard'; // Assuming VideoCard is in the same directory

function VideoGrid() {
  // Create an array of 25 elements
  const videoCards = Array.from({ length: 25 }, (_, index) => (
    <VideoCard key={index} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 m-4 gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {videoCards}
    </div>
  );
}

export default VideoGrid;