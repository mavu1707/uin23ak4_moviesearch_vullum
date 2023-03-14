//API
//https://www.omdbapi.com/?s=James%20Bond&type=movie&apikey=685b8bcf

import { useEffect, useState } from "react"

export default function Main() {
  const [movie, setMovie] = useState([])
  const [filter, setFilter] = useState("")
  const [result, setResult] = useState([])

  const getMovie = async () => {

    const response = await fetch(
      "https://www.omdbapi.com/?s=James%20Bond&type=movie&apikey=685b8bcf"
    )

    const data = await response.json();
    
    setMovie(data.Search);
  }

  const filterMovie = () => {
      setResult(movie.filter((item) =>
        item.Title.toLowerCase().includes(filter.toLowerCase())
      )) 
  }

  useEffect(() => {
    filterMovie();
  }, [movie, filter]);

  useEffect(() => {
    getMovie();
  }, []);

  console.log(result);

  return <h2>Maidjskjn</h2>;
}