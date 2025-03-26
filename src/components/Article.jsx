export default function Article({ id, img, title }) {
  
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )
}