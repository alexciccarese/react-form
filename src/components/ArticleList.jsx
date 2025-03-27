import Article from "./Article";

export default function ArticlesList({ articles }) {

  return (

    <div className="container">
      {articles.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          title={article.title}
        />
      ))}
    </div>

  )
}