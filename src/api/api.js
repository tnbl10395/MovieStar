export const getPopular = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0267c13d8c7d1dcddb40001ba6372235')
    .then((response)=>response.json())
    .then((responseJson)=>{
        
    });
}