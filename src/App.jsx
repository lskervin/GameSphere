import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useState, useEffect } from 'react';
import GenreFilter from './components/GenreFilter'
// import Pagination from './components/Pagination'

//paginate or pagination

function App() {
  const [games, setGames] = useState([])
  const [showmenu, setShowMenu] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1);
  // const [recordsPerPage] = useState(5);
  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  // const nPages = Math.ceil(data.length / recordsPerPage)
  // const setGamesList =setGames
  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then((res)=>res.json())
    .then((data)=>setGames(data))
  },[<GenreFilter/>])
  


  return(
      <div className='container'>
        {showmenu ?<aside className="side-menu-container">
          <NavBar />
        </aside> : null}
        <div className='header-container'>
          < Header setShowMenu={setShowMenu} showmenu={showmenu}/>
        </div>
        <main className="bottom-component">
        {/* <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          gameList={gameList}
        /> */}
          <Outlet context={{games, setGames}}/>
        </main>
      </div>
  )
}

export default App
