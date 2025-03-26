import articles from "../data/articles"
import ArticlesList from "./articleList"
import Form from "./Form"

export default function Main() {
  return (
    <>
      <h1>ARTICLES</h1>
      <Form />
      <ArticlesList articles={articles}/>
    </>
  )
}