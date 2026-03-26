
import { useState } from "react";
import Loader from "./components/Loader/Loader";
import HeaderForm from "./components/SearchBar/SearchBar";
import { getFilms } from "./servises/movieService";
import type { Movie } from "./types/movie";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import MovieGrid from "./components/MovieGrid/MovieGrid";


export default function App(){
const [isLoader, setIsLoader] = useState(false)
const [isError, setIsError] = useState(false)
const [arrFilms, setArrFilms] = useState<Movie[]>([])

const fetchArrFilms = async (searchFilms:string)=>{

  try{
setIsLoader(true)
setIsError(false)
const newArrFilms = await getFilms(searchFilms)
setArrFilms(newArrFilms)
}catch{
setIsError(true)
}finally{
setIsLoader(false)
}

} 
  return(
  <>
  < HeaderForm onSearch={fetchArrFilms}/>
  {isLoader && <Loader />}
  {isError && <ErrorMessage />}
  {<MovieGrid films={arrFilms}/> }
  </>
  )
}