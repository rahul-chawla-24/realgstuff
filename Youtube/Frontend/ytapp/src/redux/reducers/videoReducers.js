const intitialState = {
videos:[]
}

function videosReducers(state=intitialState,action){
    let stateCopy = {...state}
    switch(action.type){
        case'VIDEOS_FETCHED':
        stateCopy.videos = action.payload;
        console.log("-->" , stateCopy.videos)
        return stateCopy;
        case "VIDEOS_FETCH_FA1ILED" :
        console.log(action.payload);    
        default :
        return stateCopy;
    }
}

export default videosReducers;