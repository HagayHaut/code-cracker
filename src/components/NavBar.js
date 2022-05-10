import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <NavLink to='/help'>
        <h3>Help</h3>
      </NavLink>
      <NavLink to='/game'>
        <h3>Game</h3>
      </NavLink>
      <NavLink to='/leaderboard'>
        <h3>Leaderboard</h3>
      </NavLink>
      <NavLink to='/settings'>
        <h3>Settings</h3>
      </NavLink>
    </div>
  )
}

export default NavBar;