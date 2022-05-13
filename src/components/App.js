import '../App.css';
import UsernameForm from './UsernameForm';
import React, { useState } from 'react';
import NavBar from './NavBar';
import Game from './Game';
import SettingsForm from './SettingsForm';
import { Route, Routes as Switch } from 'react-router-dom';
import Help from './Help';
import Leaderboard from './Leaderboard';

function App() {

  const [username, setUsername] = useState('');
  const [settings, setSettings] = useState({
    passwordLength: 4,
    randomEventsLimit: 0,
    numberOfGameBoards: 1,
    showTimer: false
  });
  const [isReturningUser, setIsReturningUser] = useState(false)

  function onUsernameSubmit(name) {
    setUsername(name)
  }

  function handleReturningUser(prevSettings){
    setSettings(prevSettings)
    setIsReturningUser(true)
  }

  return (
    <div className="App">
      { username ? 
        <NavBar /> :
        <UsernameForm onUsernameSubmit={onUsernameSubmit} handleReturningUser={handleReturningUser}/>
      }
      <br></br>

      <Switch>
        <Route path='/home' element={
            <Game username={username} settings={settings} isReturningUser={isReturningUser}/>}/>

        <Route path='/settings' element={
          <>  
            <SettingsForm settings={settings} onUsernameSubmit={onUsernameSubmit} setSettings={setSettings}/>
          </>
          }/>
        <Route path='/leaderboard' element={<Leaderboard />}/>

        <Route path='/help' element={
          <>
            <Game username={username} settings={settings} isReturningUser={isReturningUser}/>
            <br></br>
            <Help />
          </> }/>
      </Switch>

    </div>
  );
}

export default App;
