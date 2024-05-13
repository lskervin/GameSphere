import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function GamePlay() {
  const location = useLocation();
  const { state } = location;
  const { setIsSelected, isSelected, idValue } = state || {};
  const navigate = useNavigate()

  // Show loading state until idValue is initialized
  if (!idValue) {
    return <div>Loading...</div>; // You can replace this with a spinner component
  }

  return (
    <div style={{ top: '0%' }} className="game-play-card">
      <div style={{marginLeft: '100px'}} className='game-play-container'>
        <h1 style={{marginLeft: '25px'}}>{idValue.title}</h1>
        <div className="game-play-window" style={{ position: "relative" }}>
        <div class="card">
            <img src={idValue.thumbnail}/>
            <div class="card__content">
                <p class="card__description">{idValue.short_description}</p>
            </div>
            </div>
          {/* Button inside the image */}
          <button onClick={() => { navigate('/') }} style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default GamePlay;
