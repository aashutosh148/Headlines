const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200 
  }));


const cache = new NodeCache({ stdTTL: 7200 }); // Cache for 2 hours to get latest news 

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3000;
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=in&apikey=' + API_KEY;

app.get('/api/news', async (req, res) => {
    const cachedData = cache.get('topHeadlines');

    if (cachedData) {
        // console.log("used cached data");
        return res.json(cachedData);
    }
    try {
        // console.log("Used real data");
        const response = await axios.get(BASE_URL);
        const articles = response.data.articles.slice(0, 5).map(article => ({
            title: article.title,
            author: article.author || 'Unknown',
            description: article.description,
            source: article.source.name,
            publishedAt: article.publishedAt,
            image: article.urlToImage
        }));
        cache.set('topHeadlines', articles);
        res.json(articles);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to fetch news' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
