//API
//https://www.omdbapi.com/?s=James%20Bond&type=movie&apikey=685b8bcf
import MovieCards from "./Moviecards"
import { useEffect, useState } from "react"
import HorizontalScroll from 'react-scroll-horizontal'

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

  //placeholder bilde
  //scroll with pointer 
  return (
    <>
      <h1 className="james-bond">James Bond</h1>
      <HorizontalScroll className="james-bond-box" style={{height: "40vh"}}>
        {result.length <= 0 ? movie?.map((item, index) =>(
          <MovieCards key={index} img={item.Poster} title={item.Title} year={item.Year} />
        )) : result?.map((item, index) =>(
          <MovieCards key={index} img={item.Poster} title={item.Title} year={item.Year} />
        )) }
      </HorizontalScroll>
    </>

  )
}