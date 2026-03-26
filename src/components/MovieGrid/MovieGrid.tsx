import type { Movie } from "../../types/movie"
import css from "./MovieGrid.module.css"

interface FilmsListProps{
    films:Movie[],
}

export default function MovieGrid({films}:FilmsListProps){
    const urlImg = "https://image.tmdb.org/t/p/w500/"
    return(
<ul className={css.grid}>
{films.map((film) =>(
    <li key={film.id}>
 		<div className={css.card}>
	<img
		 className={css.image}
		 src= {urlImg + film.poster_path}
		 alt= {film.title}
		 loading="lazy"
		/>
	<h2 className={css.title}>Movie title</h2>
</div>
</li>
))}
</ul>

    )
}