import { createStore } from "redux";

const initialState = {
  movies: [],
  shows: [],
  movieDetail: {},
  showDetail: {},
  searchMovies: [],
  searchShows: [],
  searchItem: "",
};

function appReducer(state = initialState, action) {
  let stateCopy = { ...state };
  switch (action.type) {
    case "FETCHED_MOVIES":
      return {...stateCopy, movies : action.payload};
    case "MOVIE_DETAIL":
      stateCopy.movieDetail = action.payload;
      return stateCopy;
    case "FETCHED_SHOWS":
      console.log(action.payload);
      return {...stateCopy, shows : action.payload};
    case "SHOW_DETAIL":
      stateCopy.showDetail = action.payload;
      return stateCopy;
    case "SEARCH_ITEM":
      return { ...stateCopy, searchItem: action.payload };
    case "COMBINE_BOTH":
      stateCopy.moviesAndShows.push(stateCopy.movies);
      stateCopy.moviesAndShows.push(stateCopy.show);
      return stateCopy;
    case "SEARCH":
      console.log("search", stateCopy);
      let movieArr = stateCopy.movies.filter((obj) =>
        obj.title
          .trim()
          .toLowerCase()
          .includes(stateCopy.searchItem.trim().toLowerCase())
      );
      let showArr = stateCopy.shows.filter((obj) =>
        obj.name
          .trim()
          .toLowerCase()
          .includes(stateCopy.searchItem.trim().toLowerCase())
      );
      return { ...stateCopy, searchMovies: movieArr, searchShows: showArr };
    default:
      return state;
  }
}

const store = createStore(appReducer);
export default store;
