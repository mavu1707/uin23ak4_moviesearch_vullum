export default function Layout({child}){
  return (
    <div>
      <header>
        <h1>Moviesearch.com</h1>
        <nav>
          <li>About us</li>
          <li>Contact us</li>
        </nav>

        <nav>
          <li>Movies</li>
          <li>TV sereis</li>
          <li>News</li>
        </nav>
      </header>
      
      <main>
        {child}
      </main>

      <footer>
        <span>Ikoner komer her</span>
      </footer>
    </div>
  )
}