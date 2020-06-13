import axios from "axios";

export const search = () => async (dispatch) => {
  let movieUrl = "http://localhost:5500/movie/all";
  if (process.env.NODE_ENV === "production") {
    movieUrl = "/movie/all";
  }
  let moviesFetched = await axios.get(movieUrl);
  await dispatch({
    type: "SEARCH_MOVIES_FETCHED",
    payload: moviesFetched.data,
  });
  let showUrl = "http://localhost:5500/show/all";
  if (process.env.NODE_ENV === "production") {
    showUrl = "/show/all";
  }
  let showsFetched = await axios.get(showUrl);
  await dispatch({
    type: "SEARCH_SHOWS_FETCHED",
    payload: showsFetched.data,
  });

  await dispatch({
    type: "SEARCH_COMBINE_BOTH",
  });

  let genreUrl = "http://localhost:5500/genre/all";
  if (process.env.NODE_ENV === "production") {
    genreUrl = "/genre/all";
  }
  let genreFetched = await axios.get(genreUrl);
  await dispatch({
    type: "SEARCH_GENRE_FETCHED",
    payload: genreFetched.data,
  });

  await dispatch({
    type: "SEARCH",
  });
};

export const setSearchItem = (item) => (dispatch) => {
  console.log("searchAction", item);
  dispatch({
    type: "SET_SEARCH_ITEM",
    payload: item,
  });
};
