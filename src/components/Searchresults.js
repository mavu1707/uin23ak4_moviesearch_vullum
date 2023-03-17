import { useEffect, useState } from "react";

export default function SearchResults() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
    setShowSearchResults(false)
  }

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.length < 3) {
        setSearchResults([])
        setShowSearchResults(false)
        return
      }

      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=685b8bcf`
      )
      const data = await response.json()
      setSearchResults(data.Search || [])
      setShowSearchResults(true)
    }

    fetchSearchResults()
  }, [searchQuery])

  //placeholder bilde 
  return (
    <>
      <h1 className="search">Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search MoveSe"
      />
      {showSearchResults && (
        <ul className="search-result">
          {searchResults.map((result) => (
            <li key={result.imdbID}>
              <img src={result.Poster} alt={result.Title} />
              <div className="search-box">
                <h2>{result.Title}</h2>
                <p>Release year: {result.Year}</p>
                <p>Type: {result.Type}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
