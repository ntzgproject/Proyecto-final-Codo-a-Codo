const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmRlOGU4MzI2MzZhMzI0NWVlODU5NWQyNmQ2ZGJmNCIsInN1YiI6IjY2NThhYmVlMTg3OTI1NzI3ODY3YzE1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MkpDQjaAZhRu-tcT81vzlB4QYpP8hABaTlCRgIkABwk'
    }
  };
  
  fetch('https://api.themoviedb.org/3/configuration', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));