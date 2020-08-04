import React, {Component} from "react";
import {MovieDetailsCard} from "../../components/MovieDetaillsCard/MovieDetailsCard";

export class MovieDetailsPage extends Component {
  render() {
    console.log('mdp', this.props);
    const {match: {params: {id}}} = this.props;
    const iD = Number(id);
    const {moviesConfig: {moviesList, genresList, isLoading}} = this.props;
    const movie = moviesList.find(el => el.id === iD);
    return (
      <div>
        {isLoading && !moviesList.length && <div>Loading...</div>}
        {!isLoading && !!movie && <MovieDetailsCard  movie={movie} genresList={genresList} />}
      </div>
    )
  }

}