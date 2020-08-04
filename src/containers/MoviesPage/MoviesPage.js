import React, {Component, Fragment} from "react";
import {apiKey} from "../../constants";
import queryString from "querystring";
import {MoviesList} from "../../components/MoviesList/MoviesList";
import Paginator from "../../components/Paginator/Paginator";
import './MoviesPage.scss'
import {SearchForm} from "../../components/SearchForm/SearchForm";

const CN = 'movies-page';

export class MoviesPage extends Component {
  componentDidMount() {
    this.loadMovies()
  }

  loadMovies = () => {
    const {actions: {getMovies, getGenres}} = this.props;
    getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
    getGenres(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
  };

  onPageChange = (pageNumber) => {
    const {actions: {getMovies, setPageNum}} = this.props;
    setPageNum(pageNumber);
    getMovies(`https://api.themoviedb.org/3/discover/movie?page=${pageNumber}&api_key=${apiKey}`);
  };

  onSelectMovie = (id) => {
    const {history, match: {url}} = this.props;
    history.push(`${url}/${id}`)
  };

  renderSearchForm = () => {
    const {actions:{searchMovie, setPageNum}, pageSize, pageNum, totalResults} = this.props;
    return <SearchForm
      onSearchChange={searchMovie}
      setPageNum={setPageNum}
      pageNum={pageNum}
      totalResults={totalResults}
      pageSize={pageSize}
    />
  };

  render() {
    const {moviesConfig: {moviesList, genresList, isLoading, pageSize, pageNum, totalResults}} = this.props;
    console.log(this.props);
    return (
      <div className={`${CN}`}>
        {this.renderSearchForm()}


        {isLoading && !moviesList.length && !genresList.length && <h3>Loading...</h3>}

        {!isLoading && !!moviesList.length && !!genresList.length
        && <Fragment>
          <Paginator pageNum={pageNum} onPageChange={this.onPageChange} totalResults={totalResults} pageSize={pageSize}/>
          <MoviesList
            options={{moviesList, genresList}}
            onSelect={this.onSelectMovie}
          />
        </Fragment>
        }
      </div>
    )
  }
}