import { useEffect, useState } from "react";

export default function SearchResults() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.length < 3) {
        setSearchResults([])
        return
      }

      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=685b8bcf`
      )
      const data = await response.json()
      setSearchResults(data.Search || [])
    };

    fetchSearchResults()
  }, [searchQuery])

  return (
    <>
      <h1>Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.imdbID}>
            <img src={result.Poster} alt={result.Title} />
            <div>
              <h2>{result.Title}</h2>
              <p>Year: {result.Year}</p>
              <p>Type: {result.Type}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
