 import axios from "axios";
import type { Movie } from "../types/movie"; 

interface GetAricleLesRes{
  results:Movie[];
}

 
 export const getFilms = async(namesFilms:string):Promise<Movie[]> =>{
    
    const url = "https://api.themoviedb.org/3/search/movie";
    const setting = {
  params: {
   query: namesFilms
  },
  headers: {
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  }}
    const responce = await axios.get<GetAricleLesRes>(url, setting);  
    return responce.data.results
 }