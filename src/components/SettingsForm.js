import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledInput = styled.input`
  background: #f0f4f8;
  height: 22px;
  color: #102a43;
  font-weight: bolder;

  &&:focus {
    border: 2px solid #d9e2ec
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  
`

const Div = styled.div`
  display: inline-block;
`

const StyledSubmit = styled.button`
  background: #829ab1;
  padding: 5px 5px 5px 5px;
  color: #102a43;
  font-weight: bolder;
`

function SettingsForm({setSettings}) {
  const [formData, setFormData] = useState({
    passwordLength: 4,
    randomEventsLimit: 0,
    numberOfGameBoards: 1,
    showTimer: false
  })

  const history = useNavigate()

  function handleChange(e){
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  function handleSubmit(e){
    e.preventDefault()
    setSettings(formData)
    history('../game')
  }

  return (
    <>
      <h3>Game Settings</h3>
      <Div>
        <StyledForm onSubmit={handleSubmit}>
          <label>Passcode Length</label>
          <StyledInput type='number' name="passwordLength" value={formData.passwordLength} onChange={handleChange}></StyledInput>
          <br></br>
          <label>Max Number of Forced Guesses</label>
          <StyledInput type='number' name="randomEventsLimit" value={formData.randomEventsLimit} onChange={handleChange}></StyledInput>
          <br></br>
          <label>Number of Game Boards</label>
          <StyledInput type='number' name="numberOfGameBoards" value={formData.numberOfGameBoards} onChange={handleChange}></StyledInput>
          <br></br>
          <label><input type='checkbox' name="showTimer" value={formData.showTimer} onChange={handleChange}></input> Display Timer?</label>
          <br></br>
          <StyledSubmit type='submit'>Submit</StyledSubmit>
        </StyledForm>
      </Div>
    </>
  )
}

export default SettingsForm