export default function MovieCards({img, title, year}){
  return (
    <article>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>
        Release date: {year}
      </p>
    </article>
  )
}