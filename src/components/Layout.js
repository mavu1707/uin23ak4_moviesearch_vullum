export default function Layout({child}){
  return (
    <div>
      <header>
        <h1>MovSe</h1>
        <nav>
          <li>About us</li>
          <li>Contact</li>
          <li>Movies</li>
          <li>TV Shows</li>
        </nav>
        <p className="about-us">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
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