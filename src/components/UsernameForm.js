import React, { useState } from 'react';

function UsernameForm({ onUsernameSubmit }) {

    const [nameInput, setNameInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        onUsernameSubmit(nameInput)
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