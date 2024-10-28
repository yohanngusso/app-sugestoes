// src/Pages/MovieSuggestions.jsx
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../../Components/MovieList/MovieList';
import './MovieSuggestions.css';

const API_KEY = '03e154985a58bf40e13653198c806c19';

function MovieSuggestions() {
  const location = useLocation();
  const { genre, year, rating } = location.state;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
          params: {
            api_key: API_KEY,
            with_genres: genre,
            primary_release_year: year,
            'vote_average.gte': rating,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
  }, [genre, year, rating]);

  return (
    <div className="suggestions-container">
      <h2>Sugestões de Filmes</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default MovieSuggestions;
