async function getPopularMoviesPreview() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=759afe2f973e62f0426265a22a2fa385&language=es-ES&page=1`);
    const data = await response.json();

    console.log(data);
    
    return data.results;
}

getPopularMoviesPreview();