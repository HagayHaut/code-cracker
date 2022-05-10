import '../App.css';
import UsernameForm from './UsernameForm';
import React, { useState } from 'react';
import NavBar from './NavBar';
import Game from './Game';
import SettingsForm from './SettingsForm';
import { Route, Routes as Switch } from 'react-router-dom';
import Help from './Help'

function App() {

  const [username, setUsername] = useState('');
  const [settings, setSettings] = useState({
    passwordLength: 4,
    randomEventsLimit: 0,
    numberOfGameBoards: 1,
    showTimer: false
  });

  function onUsernameSubmit(name) {
    setUsername(name)
  }

  return (
    <div className="App">
      { username ? 
        <NavBar /> :
        <UsernameForm onUsernameSubmit={onUsernameSubmit}/>
      }

      <Switch>
        <Route path='/game' element={
            <Game username={username} settings={settings} />}/>

        <Route path='/settings' element={
          <>
            <Game username={username} settings={settings}/>
            <SettingsForm onUsernameSubmit={onUsernameSubmit} setSettings={setSettings}/>
          </>
          }/>
        <Route path='/help' element={
          <>
            <Help />
            <Game username={username} settings={settings}/>
          </> }/>
      </Switch>

    </div>
  );
}

export default App;
