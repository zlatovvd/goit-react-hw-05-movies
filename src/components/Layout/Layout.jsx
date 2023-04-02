import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Layout.module.css';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Layout = ({ children }) => {
  return (
    <div>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <StyledLink to="/" className={css.link}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </nav>
      {children}
      <Suspense fallback={<div>...Loading page</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
