import '../App.css';
import UsernameForm from './UsernameForm';
import React, { useState } from 'react';
import NavBar from './NavBar';
import Game from './Game';
import SettingsForm from './SettingsForm';

function App() {

  const [username, setUsername] = useState('');
  const [settings, setSettings] = useState({});

  function onUsernameSubmit(name) {
    setUsername(name)
  }

  return (
    <div className="App">
      <NavBar />
    { username ? <Game username={username}/> : <UsernameForm onUsernameSubmit={onUsernameSubmit}/>}
    </div>
  );
}

export default App;
