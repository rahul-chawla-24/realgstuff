const initialState = {
  movies: [],
  crime: [],
  drama: [],
  movie : {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "MOVIESPAGE_FETCHED":
      return { ...state, movies: action.payload };
    case "MOVIEINFO":
      return {...state,movie : action.payload}
    case "DRAMA_MOVIES":
      let dramaMovies = [];
      state.movies.forEach((movie) => {
        console.log(movie);
        if (movie.genres && movie.genres[0]) {
          console.log(movie);
          movie.genres.forEach((genre) => {
            if (genre.name === "Drama") {
              dramaMovies.push(movie);
            }
          });
        }
      });
      return {
        ...state,
        drama: dramaMovies,
      };
    case "CRIME_MOVIES":
      let crimeMovies = [];
      state.movies.forEach((movie) => {
        console.log(movie);
        if (movie.genres && movie.genres[0]) {
          console.log(movie);
          movie.genres.forEach((genre) => {
            if (genre.name === "Crime") {
              crimeMovies.push(movie);
            }
          });
        }
      });
      return {
        ...state,
        crime: crimeMovies,
      };
    default:
      return state;
  }
}

const filterArray = (array, fields, value) => {
  fields = Array.isArray(fields) ? fields : [fields];

  return array.filter((item) => fields.some((field) => item[field] === value));
};
