import React, { useEffect, useState } from 'react';
import './News.css';

const News = () => {
    const [news, setNews] = useState([]);  // Stan dla przechowywania wiadomości
    const [loading, setLoading] = useState(true);  // Stan ładowania
    const [error, setError] = useState(null);  // Stan dla błędów

    // Funkcja do pobierania wiadomości z API
    const fetchNews = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://newsapi.org/v2/everything?q=crypto&apiKey=10a8b00d293e4e3cbc0d43261f7f91b7'); // Zastąp "YOUR_API_KEY" swoim kluczem API
            const data = await response.json();
            setNews(data.articles);  // Zapisanie artykułów w stanie
        } catch (err) {
            console.error(err);
            setError('Failed to fetch news');
        } finally {
            setLoading(false);
        }
    };

    // Wywołanie fetchNews po załadowaniu komponentu
    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className='news'>
            <h1>Latest News</h1>

            {/* Wyświetlanie komunikatu o ładowaniu */}
            {loading && <p>Loading...</p>}

            {/* Wyświetlanie błędu, jeśli wystąpił */}
            {error && <p>{error}</p>}

            {/* Wyświetlanie wiadomości */}
            <div className='news-list'>
                {news.map((article, index) => (
                    <div key={index} className='news-item'>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target='_blank' rel='noopener noreferrer'>Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
