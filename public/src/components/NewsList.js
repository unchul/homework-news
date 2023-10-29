import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NewsList = () => {
  const { news, error, loading } = useSelector((state) => state.news);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {news.map((article, index) => (
        <div key={index}>
          <Link to={`/article/${article.title}`}>
            <h3>{article.title}</h3>
          </Link>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};


export default NewsList;