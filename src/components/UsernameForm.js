import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';


function UsernameForm({ onUsernameSubmit }) {

    const [nameInput, setNameInput] = useState('')

    let history = useNavigate()

    function handleSubmit(e) {
      e.preventDefault()
      onUsernameSubmit(nameInput)
      history('/settings')
    }

  return (
    <form onSubmit={handleSubmit}>
        <label />
        <input value={nameInput} type='text' onChange={e => setNameInput(e.target.value)}></input>
        <input type='submit' value='Submit'></input>  


    </form>
  )
}

export default UsernameForm;