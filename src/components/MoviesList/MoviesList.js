import React from "react";
import {MovieCard} from "../MovieCard/MovieCard";
import './MoviesList.scss'

const CN='movies-list';
export const MoviesList = (props) =>{
  const {options:{ moviesList, genresList}, onSelect} = props;
  return(
    <div className={`${CN} d-flex flex-wrap`}>
      {
        !!moviesList.length && moviesList.map(el=>{
          return <MovieCard key={el.id} movie={el} genres={genresList} onSelect={onSelect} />
        })
      }
      {
        !moviesList.length  && (
          <div> No Options To Displays</div>
        )
      }
    </div>
  )
}