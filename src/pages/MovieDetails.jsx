import getInfo from 'services/moviesApi';
import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  console.log(location.state); 

  useEffect(() => {
    setIsLoading(true);
    const loadMovie = async () => {
      let url = `https://api.themoviedb.org/3/movie/${movieId}?&language=en-US`;
      try {
        let movie = await getInfo(url);
        setMovie(movie.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadMovie();
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    (!movie && <Link to={location.state?.from ?? '/'}>Error, go Back</Link>) ||
    (movie && (
      <div className={css.movieDetails}>
        <Link to={location.state?.from ?? '/'}>Back</Link>
        <div className={css.movieWrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            height="300"
          />
          <div className={css.about}>
            <h1>{movie.original_title}</h1>
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>

            <p>{movie.genres.map(item => item.name).join(', ')}</p>
          </div>
        </div>

        <h3>Additional information</h3>
        <ul className={css.informationList}>
          <li>
            <Link to={`/movies/${movieId}/cast`} state={{ from: location.state.from }}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`} state={{ from: location.state.from }}>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>...Loading page</div>}>
          <Outlet />
        </Suspense>
      </div>
    ))
  );
};

export default MovieDetails;
