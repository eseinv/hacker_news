import React from "react";

export const Articles = props => {
  const filteredArticles = props.articles.filter(article =>
    article.title.toLowerCase().includes(props.searchFilter.toLowerCase())
  );

  return (
    <div className="articles-container">
      {filteredArticles.map(article => (
        <div className="article" key={article.id}>
          <div className="article-title">{article.title}</div>
          <div className="article-metainfo">
            <div className="article-details"> {article.points} points</div>
            <div className="article-details separator">|</div>
            <div className="article-details"> {article.poster}</div>
            <div className="article-details separator">|</div>
            <div className="article-details"> {article.posted} </div>
            <div className="article-details separator">|</div>
            <div className="article-details"> {article.comments} comments</div>
            <div className="article-details separator">|</div>
            <div className="article-details article-url"> {article.url} </div>
          </div>
        </div>
      ))}
    </div>
  );
};
