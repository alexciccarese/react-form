import articles from "../data/articles"
import ArticlesList from "./articleList"

export default function Main() {
  return (
    <>
      <h1>ARTICLES</h1>
      <ArticlesList articles={articles}/>
    </>
  )
}