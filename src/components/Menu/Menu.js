import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../Home/Home';
import Movies from '../Movies/Movies';

const StyledLink = styled(NavLink)`
  color: black;

  &.activ {
    color: orange;
  }
`;

const Menu = () => {
  return (
    <div>
      <h1>Home page</h1>
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
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      <Outlet />
    </div>
  );
};

export default Menu;
