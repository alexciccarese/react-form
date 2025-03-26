import Article from "./article";

export default function ArticlesList({ articles }) {

  return (

    <div className="container">
      {articles.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          img={article.img}
          title={article.title}
        />
      ))}
    </div>

  )
}