import axios from "axios";

export const fetchMovies = () => async (dispatch) => {
  let movieUrl = "http://localhost:5500/movie/all";
  if (process.env.NODE_ENV === "production") {
    movieUrl = "/movie/all";
  }
  let moviesFetched = await axios.get(movieUrl);
  dispatch({
    type: "MOVIESPAGE_FETCHED",
    payload: moviesFetched.data,
  });

  dispatch({
    type: "CRIME_MOVIES",
  });

  dispatch({
    type: "DRAMA_MOVIES",
  });
};

export const fetchMovieById = (id) => async (dispatch) => {
  let movieUrl = "http://localhost:5500/movie/all";
  if (process.env.NODE_ENV === "production") {
    movieUrl = "/movie/all";
  }
  let moviesFetched = await axios.get(movieUrl);
  dispatch({
    type: "MOVIESPAGE_FETCHED",
    payload: moviesFetched.data,
  });
  let movieInfoUrl = `http://localhost:5500/movie/${id}`;
  if (process.env.NODE_ENV === "production") {
    movieInfoUrl = `/movie/${id}`;
  }
  let movieInfo = await axios.get(movieInfoUrl);
  console.log(movieInfo.data[0]);
  dispatch({
    type: "MOVIEINFO",
    payload: movieInfo.data[0],
  });
};
