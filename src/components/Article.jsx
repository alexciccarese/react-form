export default function Article({ id, img, title }) {
  
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )
}