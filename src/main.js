async function getPopularMoviesPreview() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`);
    const data = await response.json();
    const movies = data.results;
    movies.forEach(movie => {
        const trendingPreviewContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);
        movieContainer.append(movieImg);
        
        trendingPreviewContainer.append(movieContainer);
    })
    console.log(movies);
    
}

getPopularMoviesPreview();