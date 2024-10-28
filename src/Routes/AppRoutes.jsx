// src/Routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import MovieSuggestions from '../Pages/MovieSuggestions/MovieSuggestions';

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/suggestions" element={<MovieSuggestions />} />  
      </Routes>
    </>
  );
}

export default AppRoutes;
