import axios from 'axios' ;

export const fetchHomepageData = () => async (dispatch) => {

    let moviesFetched = await axios.get("http://localhost:3000/movie/all");
    dispatch({
        type : "MOVIES_FETCHED",
        payload : moviesFetched.data
    })
    let showsFetched = await axios.get("http://localhost:3000/show/all");
    dispatch({
        type : "SHOWS_FETCHED",
        payload : showsFetched.data
    })

    dispatch({
        type : "COMBINE_BOTH",
    })
    
    let genreFetched = await axios.get("http://localhost:3000/genre/all");
    dispatch({
        type : "GENRE_FETCHED",
        payload : genreFetched.data
    })
};
