const initialState = {
  movies: [],
  tvShows: [],
  moviesAndShows: [],
  genres: [],
  searchItem: "",
  searchResult: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SEARCH_MOVIES_FETCHED":
      console.log(action.payload);
      return { ...state, movies: action.payload };
    case "SEARCH_SHOWS_FETCHED":
      return { ...state, tvShows: action.payload };
    case "SEARCH_COMBINE_BOTH":
      let combine = state.movies.concat(state.tvShows);
      shuffleArray(combine);
      return { ...state, moviesAndShows: combine };
    case "SEARCH_GENRE_FETCHED":
      return { ...state, genres: action.payload };
    case "SET_SEARCH_ITEM":
      // localStorage.setItem('searchItem' , action.payload)
      return { ...state , searchItem : action.payload };
    case "SEARCH":
      console.log("search" , state)
      let arr;
      if(state.searchItem){
       arr = state.moviesAndShows.filter(
        (obj) =>
          // obj.name.trim().toLowerCase() === state.searchItem.trim().toLowerCase()
          obj.name.trim().toLowerCase().includes(state.searchItem.trim().toLowerCase())
      );
      }
      return { ...state, searchResult: arr };
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
