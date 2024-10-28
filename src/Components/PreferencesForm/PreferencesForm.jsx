import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function PreferencesForm() {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/suggestions', { state: { genre, year, rating } });
  };

  return (
    <form onSubmit={handleSubmit} className="preferences-form">
      <label>
        Gênero:
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Selecione um gênero</option>
          <option value="28">Ação</option>
          <option value="35">Comédia</option>
          <option value="18">Drama</option>
          <option value="27">Terror</option>
          <option value="878">Ficção Científica</option>
          <option value="10749">Romance</option>
        </select>
      </label>

      <label>
        Ano de Lançamento:
        <input
          type="number"
          placeholder="Ex: 2022"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </label>

      <label>
        Avaliação Mínima (0-10):
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          placeholder="Ex: 7.5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>

      <button type="submit">Buscar Sugestões</button>
    </form>
  );
}

export default PreferencesForm;
