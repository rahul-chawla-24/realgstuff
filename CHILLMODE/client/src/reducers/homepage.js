const initialState = {
  movies: [],
  tvShows: [],
  moviesAndShows :[],
  genres :[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "MOVIES_FETCHED":
      console.log(action.payload)
      return { ...state, movies: action.payload };
      case "SHOWS_FETCHED":
      return { ...state, tvShows: action.payload };
      case "COMBINE_BOTH":
        let combine = state.movies.concat(state.tvShows);
        shuffleArray(combine);
        return{...state, moviesAndShows : combine}
        case "GENRE_FETCHED" :
          return { ...state, genres: action.payload };
    default:
      return state;
  }
}


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}