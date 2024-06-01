import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getNews();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-slate-800">Latest Headlines</h1>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2  gap-6">
        {articles.map((article, index) => (
          <div key={index} className=" p-3 bg-gray-800 text-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-300 mb-1">Author: {article.author || 'Unknown'}</p>
            <p className="text-gray-400 mb-1">Source: {article.source}</p>
            <p className="text-gray-500">
              Published: {`${new Date(article.publishedAt).toLocaleString()}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;