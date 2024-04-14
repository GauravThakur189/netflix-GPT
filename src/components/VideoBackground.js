import React from "react";
import {  useSelector } from "react-redux";
import usePlayingTrailor from "../hooks/usePlayingTrailer";

const VideoBackground = ({ id }) => {

  usePlayingTrailor(id);
  const trailerVedio = useSelector((store) => store.movies?.nowPlayingTrailer);

   
  
  return (
    <div className='w-screen'>
      <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVedio?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;