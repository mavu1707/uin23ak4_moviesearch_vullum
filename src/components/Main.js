import { useEffect, useState } from "react"
export default function Main(){
  //https://www.omdbapi.com/?s=James%20Bond&type=movie&apikey=685b8bcf
  const [movie, setMovie] = useState([])
  const [filter, setFilter] = useState("All")
  const [result, setResult] = useState([])

  const getMovie = async() =>{
    const response = await fetch('https://www.omdbapi.com/?s=James%20Bond&type=movie&apikey=685b8bcf')

    const data = await response.json()

    setMovie(data.articles)
    
    console.log(data);

  }


  useEffect(() =>{
    getMovie()
},[filter])

  

  
  
  
  
  return <h2>Main</h2>
}