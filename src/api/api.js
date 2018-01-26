export const getPopular = (dispatch,loadDataPopular) => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0267c13d8c7d1dcddb40001ba6372235')
    .then((response)=>response.json())
    .then((responseJson)=>{
        dispatch(loadDataPopular(responseJson));
    });
}

export const getNowPlaying = (dispatch,loadDataNowPlaying) => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0267c13d8c7d1dcddb40001ba6372235')
    .then((response)=>response.json())
    .then((responseJson)=>{
        dispatch(loadDataNowPlaying(responseJson));
    });
}

export const getTopRated = (dispatch,loadDataTopRated) => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0267c13d8c7d1dcddb40001ba6372235')
    .then((response)=>response.json())
    .then((responseJson)=>{
        dispatch(loadDataTopRated(responseJson));
    });
}

export const getUpcoming = (dispatch,loadDataUpcoming) => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0267c13d8c7d1dcddb40001ba6372235')
    .then((response)=>response.json())
    .then((responseJson)=>{
        dispatch(loadDataUpcoming(responseJson));
    });
}