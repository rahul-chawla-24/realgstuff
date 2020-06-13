import axios from 'axios' ;

export const search = () => async (dispatch) => {

    let moviesFetched = await axios.get("http://localhost:3000/movie/all");
   await dispatch({
        type : "SEARCH_MOVIES_FETCHED",
        payload : moviesFetched.data
    })
    let showsFetched = await axios.get("http://localhost:3000/show/all");
    await dispatch({
        type : "SEARCH_SHOWS_FETCHED",
        payload : showsFetched.data
    })

    await dispatch({
        type : "SEARCH_COMBINE_BOTH",
    })
    
    let genreFetched = await axios.get("http://localhost:3000/genre/all");
    await dispatch({
        type : "SEARCH_GENRE_FETCHED",
        payload : genreFetched.data
    });

    await dispatch({
        type : "SEARCH"
    })
};

export const setSearchItem = (item) => (dispatch) => {
    console.log('searchAction', item);
    dispatch({
        type : "SET_SEARCH_ITEM",
        payload : item
    });
}

