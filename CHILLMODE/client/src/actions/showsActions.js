import axios from 'axios' ;

export const fetchShows = () => async (dispatch) => {

    let showsFetched = await axios.get("http://localhost:3000/show/all");
    dispatch({
        type : "SHOWSPAGE_FETCHED",
        payload : showsFetched.data
    });

    dispatch({
        type : "CRIME_SHOWS",
    })

    dispatch({
        type : "DRAMA_SHOWS",
    })

};
