export default function MovieCards({img, title}){

  return (
    <article className="movie-card-container">
        <div className="movie-card">
          <img src={img} alt={title} />
        </div>
    </article>
  )
}