import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";


function Favorites() {
    const { favorites } = useMovieContext();

    if (!favorites || favorites.length === 0) {
        return (
            <div className="favorites-empty text-center mt-5">
                <h2>No Favourite Movies Yet</h2>
                <p>Start adding movies to your favourites and they will appear here!</p>
            </div>
        );
    }

    return (
        <div className="favorites container">
            <div className="row justify-content-center gx-4 gy-5">
                {favorites.map((movie) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Favorites;