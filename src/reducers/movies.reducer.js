import {
  GET_GENRES,
  GET_MOVIES,
  LOADING_MOVIES_END,
  LOADING_MOVIES_START, SEARCH_MOVIE, SET_CURRENT_PAGE
} from "../action-types";

const initialState = {
  moviesList: [],
  genresList: [],
  totalResults: 0,
  pageNum: 1,
  pagesCount: 1,
  pageSize: 20,
  isLoading: false,
  error: '',
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      const {payload} = action;
      return {
        ...state,
        moviesList: payload.results,
        pageNum: payload.page,
        totalResults: payload.total_results
      }
    }
    case LOADING_MOVIES_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case LOADING_MOVIES_END: {
      return {
        ...state,
        isLoading: false
      }
    }
    case GET_GENRES: {
      return {
        ...state,
        genresList: action.payload
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        pageNum: action.currentPage
      }
    }
    case SEARCH_MOVIE: {
      return {
        ...state,
        moviesList: action.payload.results,
        totalPages: action.payload.total_pages,
        pageNum: action.payload.page,
        totalResults: action.payload.total_results
      }
    }
    default:
      return state

  }
};