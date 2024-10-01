import { useState } from 'react';
import './MovieFilter.css';

function MovieFilter() {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

  const handleFilterChange = () => {
    console.log({ genre, year, rating });
  };

  return (
    <div className="movie-filter">
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button onClick={handleFilterChange}>Filter</button>
    </div>
  );
}

export default MovieFilter;