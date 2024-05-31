document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'efde8e832636a3245ee8595d26d6dbf4';
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=es-ES';
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(apiUrl, options)  
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            displayMovies(data,"tendenciasContainer");
            displayMovies(data,"peliculasAclamadas");
            
            
        })
        .catch(error => console.error('Error al obtener los datos:', error));
    
    function displayMovies(data,container_id) {
        const movies = data.results;
        const container = document.getElementById(container_id);
        container.innerHTML = ''; 
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            `;
            container.appendChild(movieElement);
        });
    }
});