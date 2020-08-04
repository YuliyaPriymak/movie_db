import React from "react";
import {PosterImg} from "../PosterImg/PosterImg";
import './MovieCard.scss'

const CN = 'movie-card';
export const MovieCard = (props) => {
  const {genres, movie: {poster_path, title, vote_average, release_date, genre_ids}} = props;

  const onSelectHandler = () => {
    const {onSelect, movie: {id}} = props;
  onSelect && onSelect(id)
};

  return (
    <div className={`${CN} d-flex flex-column`} onClick={onSelectHandler}>
      <div className='img-poster'>
        <PosterImg src={poster_path}/>
      </div>
      <div>
        <h1>{title}</h1>
        <div className='genres-box'>
          {genre_ids.map(item => {
            let genre = genres.find(ind => ind.id === item);
            return <span className='genre'>{genre.name}/ </span>
          })}
        </div>
      </div>
    </div>
  )
}