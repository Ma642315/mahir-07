// src/components/MovieCard.jsx
import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow rounded p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
      <p>📅 {movie.release_date}</p>
      <p>🌐 {movie.original_language.toUpperCase()}</p>
      <p>⭐ {movie.vote_average}</p>
      <p className="text-sm text-gray-700 mt-1">
        {movie.overview.split(' ').slice(0, 20).join(' ')}...
      </p>
    </div>
  );
}

export default MovieCard;