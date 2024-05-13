import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function GameCard({ game, isFave, onClick }) {
  const [favorite, setFavorite] = useState(isFave);
  const [idValue, setIdValue] = useState(null);
  const navigate = useNavigate();

  const handlePlayGameClick = () => {
    setIdValue(game); // Store the clicked game in the state
    navigate(`/play-game`, { state: { idValue: game } });
  };

  const handleSelect = () => {
    setFavorite(!favorite);
    onClick(game.id); // Call the onClick function with the game id
    fetch(`http://localhost:3000/games/${game.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isFavorite: !favorite }), // Toggle the favorite status
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div
      className="game-card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${game && game.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className='game-card-title'>{game && game.title}</h3>
      <button onClick={handleSelect}>
        {isFave || favorite ? "Remove from Favorites ❤️" : "Add to Favorites"}
      </button>
      <button onClick={handlePlayGameClick}>
       Go to GamePlay
      </button>
    </div>
  );
}

export default GameCard;
