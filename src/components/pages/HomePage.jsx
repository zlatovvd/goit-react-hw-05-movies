import getInfo from '../services/moviesApi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    try {
      const movs = await getInfo();
      console.log(movs.data.results);
      setMovies(movs.data.results);
    } catch (error) {
      console.log(console.error(error));
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      Trending today
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
