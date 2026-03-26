import toast , { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css"

interface searchForm{

    onSearch:(query:string)=>Promise<void>
}

export default function HeaderForm({onSearch}:searchForm){
    const handleSubmit = (formData:FormData)=>{
        const querty = formData.get("query") as string
        if(querty === ""){
            toast.error("Please enter your search query.")
            return
        }
        onSearch(querty)
    }
        return (
    <header className={styles.header}>
        <div className={styles.container}>
        <a
            className={styles.link}
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
        Powered by TMDB
        </a>
    <form className={styles.form} action={handleSubmit}>
        <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
        />
    <button className={styles.button} type="submit">
        Search
    </button>
    </form>
        </div>
         <Toaster position="top-center" />
    </header>
        )
    
}