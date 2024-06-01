# News Headlines Project

## Objective

The objective of this assignment is to integrate an external API to fetch and display real-time news headlines on a news website. Caching the news headlines for a specific time, Making a backend for making requests to get the news headline, and then frontend using react to disply the headlines to client.

## Project Structure

This project is divided into two parts: **frontend** and **backend**.

-   **Frontend:** Built using React and Tailwind CSS to display the top 5 news headlines.
-   **Backend:** Built using Node.js and Express to fetch data from the News API, cache it, and serve it to the frontend.

### Frontend Integration

-   Display at least 5 headlines along with the article source and publication date.

### Backend Integration

-   Create a route to fetch news headlines from the News API.
-   Cache the responses to reduce the number of API calls.
-   If a request is made within 2 hours of the cached data, send the cached data instead of making a new API call.

## Installation and Setup

### Prerequisites

-   Node.js and npm installed
-   Vite (for React setup)

### Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd news-backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a .env file in the backend directory and add your API key and PORT number:
    ```env
    API_KEY=your_news_api_key_here
    PORT=port_number
    ```
4. Start the backend server:

    ```bash
    node index.js 
    ```

    The backend server will run on http://localhost:PORT

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd news-frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```
3. Start the frontend server using Vite:
   ```bash
   npm run dev
   ```
    The frontend server will run on http://localhost:5173.

## Running the Application

- Ensure both backend and frontend servers are running.
- Open your browser and navigate to `http://localhost:5173` to see the latest news headlines.

### Endpoint

- **GET `/api/news`**: Fetches the top 5 headlines from the News API, caches the result, and returns the data.

## Technologies Used

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express


