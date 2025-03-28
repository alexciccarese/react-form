import { useState } from "react"
import articlesData from "../data/articles"
import ArticlesList from "./ArticleList"
import Form from "./Form"

export default function Main() {
  const [articles, setArticles] = useState(articlesData)

  function addArticle(title) {

    const newArticle = {
      id: articles.length + 1,
      title: title,
    }

    setArticles([...articles, newArticle])
  }


  return (
    <>
      <h1>ARTICLES</h1>
      <Form addArticle={addArticle}/>
      <ArticlesList articles={articles}/>
    </>
  )
}