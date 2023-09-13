import SearchResults from "./Searchresults"
//Router 
//Linker 
export default function Layout({child}){
  return (
    <div>
      <header>
        <h1 className="logo">MovSe</h1>
        <nav>
          <li>About</li>
          <li>Contact</li>
          <li>Movies</li>
          <li>TV-Shows</li>
        </nav>
        <p className="about-us">
        This is a new beginning in movie searching
        </p>
      </header>

      <main>
        <SearchResults />
        {child}
      </main>
    </div>
  )
}