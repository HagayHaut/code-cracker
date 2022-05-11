import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='inline-block'>
       <div className='navbar'>
        <NavLink className='link' to='/help'>
          <h3>Help</h3>
        </NavLink>
        <NavLink to='/game' className='link'>
          <h3>Game</h3>
        </NavLink>
        <NavLink to='/leaderboard' className='link'>
          <h3>Scores</h3>
        </NavLink>
        <NavLink to='/settings' className='link'>
          <h3>Options</h3>
        </NavLink>
      </div>
    </div>
   
  )
}

export default NavBar;