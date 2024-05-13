import React from 'react'
import Logo from './Logo'



function Header({setShowMenu, showmenu}) {
  function showMenuBar(){
    setShowMenu(!showmenu)
  }
  return (
<nav className="menu">
<div className='header' onClick={showMenuBar}><Logo/></div>
<div className='game-sphere'>GameSphere</div>
  <div className="user-container">
    <div className="button-container">
      <button>
        <span className="profile-logo" role="img" aria-label="user">
          👤
        </span>
        <span className="profile-menu">username</span>
      </button>
    </div>
  </div>
</nav>
);
}
    

export default Header