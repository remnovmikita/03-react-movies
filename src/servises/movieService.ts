 import axios from "axios";
import type { Movie } from "../types/movie"; 

interface GetAricleLesRes{
  results:Movie[];
}

 
 export const getFilms = async(namesFilms:string):Promise<Movie[]> =>{
    const VITE_MY_FILM_KEY= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTc1NjFkOGE0ZDQ5NjE0ZjU1ZWJhY2IyZWFiMDdjOCIsIm5iZiI6MTc3NDIyNDAzMi4xMTUsInN1YiI6IjY5YzA4MmEwMWIyOTRlYWM1NTEzYzE2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRgwCOj0zVp4pWeyMil91riwkTGbfype3MQnemz5Kyk"
    const url = "https://api.themoviedb.org/3/search/movie";
    const setting = {
  params: {
   query: namesFilms
  },
  headers: {
  Authorization: `Bearer ${VITE_MY_FILM_KEY}`,
  }}
    const responce = await axios.get<GetAricleLesRes>(url, setting);  
    return responce.data.results
 }