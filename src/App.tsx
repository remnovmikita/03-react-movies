import { useState } from "react";
import Loader from "./components/Loader/Loader";
import HeaderForm from "./components/SearchBar/SearchBar";
import { getFilms } from "./services/movieService";
import type { Movie } from "./types/movie";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import toast from "react-hot-toast";
import MovieModal from "./components/MovieModal/MovieModal";

export default function App() {
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [arrFilms, setArrFilms] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const fetchArrFilms = async (searchFilms: string) => {
    try {
      setIsLoader(true);
      setIsError(false);
      const newArrFilms = await getFilms(searchFilms);
      if (newArrFilms.length === 0) {
        toast.error("No movies found for your request.");
      }

      setArrFilms(newArrFilms);
    } catch {
      setIsError(true);
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <>
      <HeaderForm onSearch={fetchArrFilms} />
      {isLoader && <Loader />}
      {isError && <ErrorMessage />}
      {arrFilms.length > 0 && (
        <MovieGrid
          films={arrFilms}
          onSelectMovie={(movie) => setSelectedMovie(movie)}
        />
      )}
      {selectedMovie && (
        <MovieModal
          onClose={() => setSelectedMovie(null)}
          movie={selectedMovie} 
        />
      )}
    </>
  );
}