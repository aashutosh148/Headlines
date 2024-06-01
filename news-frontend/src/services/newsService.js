import axios from 'axios';

export const fetchNews = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/news');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch news heow howo');
    }
};
