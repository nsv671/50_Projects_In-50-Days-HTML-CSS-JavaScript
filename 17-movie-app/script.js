const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f3ad492fec80029a10fc0dbd7c3aec10&page1';
// const API_URL =
//   'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f3ad492fec80029a10fc0dbd7c3aec10&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=f3ad492fec80029a10fc0dbd7c3aec10&page1&query="';

//   'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form = document.getElementById('form');

//get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const moveEl = document.createElement('div');
    moveEl.classList.add('movie');
    moveEl.innerHTML = `
    
        <img
        src="${IMG_PATH + poster_path}"
        alt=${title}
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class=${getClassByRate(vote_average)}>${
      Math.floor(vote_average * 10) / 10
    }</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            <p>
                ${overview}
            </p>
        </div>
    `;

    main.appendChild(moveEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) return 'green';
  else if (vote > 5) return 'orange';
  else return 'red';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  console.log(searchTerm);

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});
