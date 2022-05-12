import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  //<i class="fa-solid fa-circle-question"></i>
  return (
    <div className='inline-block'>
       <div className='navbar'>
        <NavLink className='link' to='/help' title='Help'>

          <h3><i class="fa fa-question-circle" aria-hidden="true"></i></h3>
        </NavLink>
        <NavLink to='/home' className='link' title='Home'>
          <h3><i class="fa fa-home" aria-hidden="true"></i></h3>
        </NavLink>
        <NavLink to='/leaderboard' className='link' title='High Scores'>
          <h3><i class="fa fa-trophy" aria-hidden="true"></i></h3>
        </NavLink>
        <NavLink to='/settings' className='link' title='Settings'>
          <h3><i class="fa fa-cog" aria-hidden="true"></i></h3>

        </NavLink>
      </div>
    </div>
   
  )
}

export default NavBar;