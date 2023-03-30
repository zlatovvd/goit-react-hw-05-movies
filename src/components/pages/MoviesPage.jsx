import { Link, Outlet, useParams } from "react-router-dom"

export const MoviesPage =() => {
    const { moveId } = useParams();
   
    return <div>Movies Page - {moveId}
       
        </div>
}