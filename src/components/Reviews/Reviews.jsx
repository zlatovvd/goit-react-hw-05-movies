import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getInfo from 'services/moviesApi';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const loadReviews = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
      try {
        const reviews = await getInfo(url);
        setReviews(reviews.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, [movieId]);

  if (isLoading) {
    return <p>Loadinh...</p>;
  }

  return (
    reviews &&
    (reviews.length > 0 ? (
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <b>Author: {author}</b>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    ) : (
      <p>We don't have any reviews for this movie</p>
    ))
  );
};

export default Reviews;
