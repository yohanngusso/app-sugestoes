import Header from '../components/Header';
import MovieFilter from '../components/MovieFilter';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="description">
        <p>Welcome to Movie Suggestions! Use the filters below to find movies that match your preferences.</p>
      </div>
      <MovieFilter />
    </div>
  );
}

export default App;