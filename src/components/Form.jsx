import { useState } from "react"

export default function Form({ addArticle }) {
  const [newPost, setNewPost] = useState('')

  function handleSubmit() {

    if(newPost === '') 
      return
      addArticle(newPost)
      setNewPost("")
    
  }

  return(

    <form onSubmit={(e) => e.preventDefault()}>

    <div className="mb-3">
      <label htmlFor="new-post" className="form-label">Post</label>

      <input 
      type="text" 
      className="form-control"
      name="new-post"
      id="new-post"
      placeholder="add post"
      value={newPost}
      onChange={e => setNewPost(e.target.value)}

      />
    </div>

    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
      Submit
    </button>

    </form>
  )
}