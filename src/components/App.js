import '../App.css';
import UsernameForm from './UsernameForm';
import React, { useState } from 'react';
import NavBar from './NavBar';
import Game from './Game';
import SettingsForm from './SettingsForm';

function App() {

  const [username, setUsername] = useState('');
  const [settings, setSettings] = useState({
    passwordLength: 4,
    randomEventsLimit: 0,
    numberOfGameBoards: 1,
    showTimer: false
  });
  const [showSettings, setShowSettings] = useState(false)

  function onUsernameSubmit(name) {
    setUsername(name)
  }

  return (
    <div className="App">
      <NavBar setShowSettings={setShowSettings}/>
    { username ? 
      <Game username={username} settings={settings}/> : 
      <UsernameForm onUsernameSubmit={onUsernameSubmit}/>}
    {showSettings &&
      <SettingsForm setSettings={setSettings}/>}
    </div>
  );
}

export default App;
