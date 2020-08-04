import React from "react";

export const PosterImg = props => {
  const {src} = props;
  return <img src={`https://image.tmdb.org/t/p/w300${src}`} alt="poster"/>
}