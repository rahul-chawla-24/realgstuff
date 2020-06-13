import axios from "axios";

export const fetchShows = () => async (dispatch) => {
  let showUrl = "http://localhost:5500/show/all";
  if (process.env.NODE_ENV === "production") {
    url = "/show/all";
  }
  let showsFetched = await axios.get(showUrl);
  dispatch({
    type: "SHOWSPAGE_FETCHED",
    payload: showsFetched.data,
  });

  dispatch({
    type: "CRIME_SHOWS",
  });

  dispatch({
    type: "DRAMA_SHOWS",
  });
};
