document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'efde8e832636a3245ee8595d26d6dbf4';
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=es-ES';
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(apiUrl, options)  // Asegúrate de usar las opciones si es necesario, aunque en este caso no son necesarias
        .then(response => response.json())
        .then(data => {
            console.log(data); // Para depuración
            displayMovies(data); // Llamar a la función para mostrar las películas
        })
        .catch(error => console.error('Error al obtener los datos:', error));
    
    function displayMovies(data) {
        const movies = data.results;
        const container = document.getElementById('tendenciasContainer');
        container.innerHTML = ''; // Limpiar contenido anterior
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.innerHTML = `
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            `;
            container.appendChild(movieElement);
        });
    }
});