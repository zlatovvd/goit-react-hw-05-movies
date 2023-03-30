import { Link, Outlet, useParams } from "react-router-dom"

export const MovieDetails = () => {

    const { movieId } = useParams();

    return <div>MovieDetails
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to="movies/500/reviews">Reviews</Link>
        <Outlet/>
    </div>

}