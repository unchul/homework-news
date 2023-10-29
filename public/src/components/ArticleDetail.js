// src/components/ArticleDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleDetail = () => {
  const { id } = useParams();
  const { news } = useSelector((state) => state.news);
  const article = news.find((article) => article.title === id);

  return (
    <div>
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <img src={article.urlToImage} alt="article" />
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
