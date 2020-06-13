const initialState = {
  shows: [],
  crime: [],
  drama: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SHOWSPAGE_FETCHED":
      return { ...state, shows: action.payload };
    case "DRAMA_SHOWS":
      let dramashows = [];
      state.shows.forEach((show) => {
        console.log(show);
        if (show.genres && show.genres[0]) {
          console.log(show);
          show.genres.forEach((genre) => {
            if (genre.name === "Drama") {
              dramashows.push(show);
            }
          });
        }
      });
      return {
        ...state,
        drama: dramashows,
      };
    case "CRIME_SHOWS":
      let crimeshows = [];
      state.shows.forEach((show) => {
        console.log(show);
        if (show.genres && show.genres[0]) {
          console.log(show);
          show.genres.forEach((genre) => {
            if (genre.name === "Crime") {
              crimeshows.push(show);
            }
          });
        }
      });
      return {
        ...state,
        crime: crimeshows,
      };
    default:
      return state;
  }
}
