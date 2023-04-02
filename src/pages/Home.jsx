import getInfo from '../services/moviesApi';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const url = `https://api.themoviedb.org/3/trending/movie/day`;

  useEffect(() => {
    setIsLoading(true);
    const loadMovies = async () => {
      try {
        const movs = await getInfo(url);
        setMovies(movs.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, [url]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    movies && (
      <div>
        <h1 className={css.title}>Trending today</h1>
        <ul>
          {movies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};


export default Home;