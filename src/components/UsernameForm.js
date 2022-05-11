import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import Button from 'react-bootstrap/Button';


const StyledForm = styled.form`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const StyledInput = styled.input`
  background: #f0f4f8;
  height: 27px;
  color: #102a43;
  font-weight: bolder;

  &&:focus {
    border: 2px solid #d9e2ec
  }
`

const StyledSubmit = styled.input`
  background: #0E7C7B;
  padding: 5px 5px 5px 5px;
  color: white;
  font-weight: bolder;
`


function UsernameForm({ onUsernameSubmit, setSettings }) {

    const [nameInput, setNameInput] = useState('')

    let history = useNavigate()
    const nameInputRef = useRef(null)

    useEffect(() => {
      nameInputRef.current.focus();
    }, [])

    function handleSubmit(e) {
      e.preventDefault()
      fetch('http://localhost:4000/games')
        .then(r => r.json())
        .then(d => {
          const lastGame = d.reverse().find(game => {
            return game.username === nameInput
          })
          if(lastGame) {
            setSettings(lastGame.settings)
          }
        })
      onUsernameSubmit(nameInput)
      history('/game')
    }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <br></br><br></br><br></br>
        <label />
        <StyledInput ref={nameInputRef} value={nameInput} type='text' onChange={e => setNameInput(e.target.value)} placeholder='Enter username'></StyledInput>
        <StyledSubmit type='submit' value='Submit'></StyledSubmit>  


    </StyledForm>
  )
}

export default UsernameForm;