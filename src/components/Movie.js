import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, poster_path, overview, genre_ids }) {
  return (
    <div key={id}>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
      <p>{overview}</p>
      <ul>
        {genre_ids.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default Movie;
