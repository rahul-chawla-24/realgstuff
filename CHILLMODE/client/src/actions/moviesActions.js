import axios from "axios";

export const fetchMovies = () => async (dispatch) => {
  let moviesFetched = await axios.get("http://localhost:3000/movie/all");
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
  let moviesFetched = await axios.get("http://localhost:3000/movie/all");
  dispatch({
    type: "MOVIESPAGE_FETCHED",
    payload: moviesFetched.data,
  });

  let movieInfo = await axios.get(`http://localhost:3000/movie/${id}`);
  console.log(movieInfo.data[0]);
  dispatch({
    type: "MOVIEINFO",
    payload: movieInfo.data[0],
  });
};
