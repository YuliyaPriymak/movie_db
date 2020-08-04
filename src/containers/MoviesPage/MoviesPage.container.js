import {MoviesPage as MoviesPageComponent} from './MoviesPage';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as moviesActions from '../../actions/movies.action';

const mapStateToProps = (state) => {
  const {movies} = state;
  return {
    moviesConfig: movies,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...moviesActions
    }, dispatch)
  }
};

export const MoviesPage = connect(mapStateToProps, mapDispatchToProps)(MoviesPageComponent);