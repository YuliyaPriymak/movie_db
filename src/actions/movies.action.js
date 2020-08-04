import {
  GET_GENRES,
  GET_MOVIES,
  GET_MOVIES_ERROR,
  LOADING_MOVIES_END,
  LOADING_MOVIES_START,
  SEARCH_MOVIE, SET_CURRENT_PAGE,
} from "../action-types";
import {batch} from "react-redux";
import {apiKey} from "../constants";

const getMoviesSuccess = (movies) => ({type: GET_MOVIES, payload: movies});
const getMoviesError = (error) => ({type: GET_MOVIES_ERROR, payload: error});
const startLoading = () => ({type: LOADING_MOVIES_START});
const endLoading = () => ({type: LOADING_MOVIES_END});

const getGenresSuccess = (genres) => ({type: GET_GENRES, payload: genres});

const setCurrentPageNum = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage});

export function setPageNum(pageNumber) {
  return(dispatch)=>{
    dispatch(setCurrentPageNum(pageNumber))
  }
}

const searchMovieSuccess = (search) => ({type: SEARCH_MOVIE, payload: search});

export function searchMovie(url) {
  return(dispatch)=>{
    fetch(url)
      .then((response) => response.json())
      .then((data)=>{
        dispatch(searchMovieSuccess(data))
      })
  }
}

export function getMovies(url) {
  return (dispatch) => {
    dispatch(startLoading());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        batch(() => {
          dispatch(endLoading());
          dispatch(getMoviesSuccess(data))
        })
      })
      .catch((error) => {
        batch(() => {
          dispatch(endLoading());
          dispatch(getMoviesError(error))
        })
      })
  }
}

export function getGenres(url) {
  return (dispatch) => {
    dispatch(startLoading());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response;
      })
      .then((response) => response.json())
      .then(({genres}) => {
        batch(() => {
          dispatch(endLoading());
          dispatch(getGenresSuccess(genres))
        })
      })
  }
}

