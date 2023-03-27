import { Link, Outlet } from "react-router-dom"

export const MoviesPage =() => {
    return <div>Movies
                <Link to="/movies/1">Details</Link>
                <Outlet />
            </div>
}