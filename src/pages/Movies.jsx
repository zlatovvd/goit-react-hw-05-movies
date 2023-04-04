import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import getInfo from 'services/moviesApi';
import { Link, useLocation } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: search });
    setSearch('');
  };

  useEffect(() => {
    if (!query) return;

    const loadMovies = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=${query}&include_adult=false`;
      try {
        const movies = await getInfo(url);
        setMovies(movies.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    loadMovies();
  }, [query]);

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="search"
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;
