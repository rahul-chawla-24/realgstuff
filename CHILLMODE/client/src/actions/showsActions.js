import axios from "axios";

export const fetchShows = () => async (dispatch) => {
  let showUrl = "http://localhost:5500/show/all";
  if (process.env.NODE_ENV === "production") {
    showUrl = "/show/all";
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

export const fetchShowById = (id) => async (dispatch) => {
  let showUrl = "http://localhost:5500/show/all";
  if (process.env.NODE_ENV === "production") {
    showUrl = "/show/all";
  }
  let showsFetched = await axios.get(showUrl);
  dispatch({
    type: "SHOWSPAGE_FETCHED",
    payload: showsFetched.data,
  });
  let showInfoUrl = `http://localhost:5500/show/${id}`;
  if (process.env.NODE_ENV === "production") {
    showInfoUrl = `/show/${id}`;
  }
  let showInfo = await axios.get(showInfoUrl);
  console.log(showInfo.data[0]);
  dispatch({
    type: "SHOWINFO",
    payload: showInfo.data[0],
  });
};
