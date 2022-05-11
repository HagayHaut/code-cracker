import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import Button from 'react-bootstrap/Button';


const StyledForm = styled.form`
  background: #102a43;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const StyledInput = styled.input`
  background: #f0f4f8;
  height: 25px;
  color: #102a43;
  font-weight: bolder;

  &&:focus {
    border: 2px solid #d9e2ec
  }
`

const StyledSubmit = styled.input`
  background: #829ab1;
  padding: 5px 5px 5px 5px;
  color: #102a43;
  font-weight: bolder;
`


function UsernameForm({ onUsernameSubmit }) {

    const [nameInput, setNameInput] = useState('')

    let history = useNavigate()

    function handleSubmit(e) {
      e.preventDefault()
      onUsernameSubmit(nameInput)
      history('/settings')
    }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <br></br><br></br><br></br>
        <label />
        <StyledInput value={nameInput} type='text' onChange={e => setNameInput(e.target.value)} placeholder='Enter username'></StyledInput>
        <StyledSubmit type='submit' value='Submit'></StyledSubmit>  


    </StyledForm>
  )
}

export default UsernameForm;