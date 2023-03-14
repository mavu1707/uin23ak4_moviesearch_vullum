//API
//https://www.omdbapi.com/?s=James%20Bond&type=movie&apikey=685b8bcf

import { useEffect, useState } from "react"

export default function Main(){

  const [movie, setMovie] = useState([])
  const [filter, setFilter] = useState([])
  const [result, setResult] = useState([])

  const getMovie = async() =>{
    const response = await fetch('https://www.omdbapi.com/?s=James%20Bond&type=movie&apikey=685b8bcf')

    const data = await response.json()

    setMovie(data.articles)

    setResult(movie.filter(items => items.source.name === filter))

  }
  console.log(result);

  useEffect(() =>{
    getMovie()
  },[])

  return <h2>Maidjskjn</h2>
}