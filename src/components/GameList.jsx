import React, { useEffect } from 'react';
import GameCard from './GameCard';
import { useOutletContext } from 'react-router-dom';
import GenreFilter from './GenreFilter';
import { useState } from 'react';
import Search from './Search';
import { Outlet } from 'react-router-dom'


function GameList() {
    const [genre, setGenre] = useState('All Games');
    const [search, setSearch] = useState('');
    const [selectedGame, setSelectedGame] = useState([]); // Initialize as null
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(8); // Number of leases to display per page
 

    const { games, setGames } = useOutletContext();
    

  

    const handleGameCardClick = (id) => {
        if (selectedGame.includes(id)) {

            setSelectedGame(selectedGame.filter((selectedGame) => selectedGame === id));
        }
        // You can perform any other actions related to clicking the game card here
        console.log(selectedGame);
    };

    function handleClick(str){
        setGenre(str)
    }

    

    const filteredGames = games.filter((game) => {
        return (
        (genre === "All Games" || game.genre === genre || game.isFavorite === true) && // Filter by genre
          game.title.toLowerCase().includes(search.toLowerCase())// Filter by search
        );
      });
    
    // Get current Games
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='game-list-container'>
            <GenreFilter handleClick={handleClick} />
            <span className='search-label'>
                <h3>Search</h3>
            </span>
            <Search setSearch={setSearch} search={search} />
            <header className="game-list-header">{ search.length > 0? 'Search Results:' : genre }:</header>
            <div className="game-list">
                {currentGames.map((game) => (
                    <GameCard key={game.id} isFave={game.isFavorite} game={game} value={game} onClick={handleGameCardClick}/>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: Math.ceil(filteredGames.length / gamesPerPage) }).map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
                ))}
            </div>
        </div>
    );
}

export default GameList;

// onClick={handleGameCardClick}
