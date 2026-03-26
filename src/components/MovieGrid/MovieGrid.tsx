import type { Movie } from "../../types/movie";
import css from "./MovieGrid.module.css";

interface MovieListProps {
  movie: Movie[];
  onSelect: (movie: Movie) => void; 
}

export default function MovieGrid({ movie, onSelect }: MovieListProps) {
  const urlImg = "https://image.tmdb.org/t/p/w500/";

  return (
    <ul className={css.grid}>
      {movie.map((movie) => (
        <li key={movie.id}>
          <div
            className={css.card}
            onClick={() => onSelect(movie)} 
          >
            <img
              className={css.image}
              src={urlImg + movie.poster_path}
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}