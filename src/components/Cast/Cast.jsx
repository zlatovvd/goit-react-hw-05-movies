import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getInfo from 'services/moviesApi';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    const loadCast = async () => {
      try {
        const cast = await getInfo(url);
        setCast(cast.data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCast();
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    cast && (
      <ul>
        {cast.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                height="100"
              />
              <p>{name}</p>
              <p>Character:{character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Cast;
