import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import {HomePage, MoviesPage} from '../pages';
import {MovieDetails} from '../Movie/MovieDetails';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Menu = () => {
  return (
    <div>      
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}>
            <Route path=":moveId" element={<MovieDetails />} />
          </Route>
        </Routes>
      <Outlet />
    </div>
  );
};

export default Menu;
