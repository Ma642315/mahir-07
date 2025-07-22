// src/pages/UpcomingMovies.jsx
import React, { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from '../api';
import MovieCard from '../components/MovieCard';

function UpcomingMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchUpcomingMovies(page)
      .then(res => {
        setMovies(prev => [...prev, ...res.data.results]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      {loading && <p className="mt-4 text-center">Loading...</p>}
      <div className="flex justify-center mt-4">
        <button
 onClick={() => setPage(prev => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default UpcomingMovies;