import { Routes, Route } from 'react-router-dom';
import { HomePage, MoviesPage } from './pages';
import { MovieDetails } from './Movie/MovieDetails';
import Layout from './Layout/Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moveId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
        </Routes>
      </Layout>
    </div>
  );
};
