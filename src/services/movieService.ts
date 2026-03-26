 import axios from "axios";
import type { Movie } from "../types/movie"; 

interface GetArticlesRes {
  results:Movie[];
}

 
export const getMovies = async(movieQuery:string):Promise<Movie[]> =>{
    
    const url = "https://api.themoviedb.org/3/search/movie";
    const setting = {
  params: {
   query: movieQuery
  },
  headers: {
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  }}
    const response = await axios.get<GetArticlesRes >(url, setting);  
    return response.data.results
 }