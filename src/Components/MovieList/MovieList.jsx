import './styles.css';
import PropTypes from 'prop-types';

function MovieList({ movies }) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : 'https://via.placeholder.com/200x300'}
            alt={movie.title}
            className="movie-poster"
          />
          <h3>{movie.title}</h3>
          <p>Avaliação: {movie.vote_average}</p>
          <p>Lançamento: {movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string,  
    })
  ).isRequired,
};

export default MovieList;
