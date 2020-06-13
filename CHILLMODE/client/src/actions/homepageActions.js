import axios from "axios";

export const fetchHomepageData = () => async (dispatch) => {
  let movieUrl = "http://localhost:5500/movie/all";
  if (process.env.NODE_ENV === "production") {
    url = "/movie/all";
  }
  let moviesFetched = await axios.get(movieUrl);
  dispatch({
    type: "MOVIES_FETCHED",
    payload: moviesFetched.data,
  });
  let showUrl = "http://localhost:5500/show/all";
  if (process.env.NODE_ENV === "production") {
    url = "/show/all";
  }
  let showsFetched = await axios.get(showUrl);
  dispatch({
    type: "SHOWS_FETCHED",
    payload: showsFetched.data,
  });

  dispatch({
    type: "COMBINE_BOTH",
  });
  let genreUrl = "http://localhost:5500/genre/all";
  if (process.env.NODE_ENV === "production") {
    url = "/genre/all";
  }
  let genreFetched = await axios.get(genreUrl);
  dispatch({
    type: "GENRE_FETCHED",
    payload: genreFetched.data,
  });
};
