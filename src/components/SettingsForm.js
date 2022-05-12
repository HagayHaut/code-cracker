import React, {useState, useEffect} from 'react'
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
  border: 2px solid black;
  padding: 20px;
  background-color: #cfd9eb;
  color: #4b1d3f;
`

const Div = styled.div`
  display: inline-block;
`

const StyledSubmit = styled.button`
  background: #0e7c7b;
  padding: 5px 5px 5px 5px;
  color: white;
  font-weight: bolder;
`

function SettingsForm({setSettings, settings}) {
  const [formData, setFormData] = useState(settings)

  const history = useNavigate()

  function handleChange(e){
    const {name, value} = e.target
    if(e.target.name === 'showTimer') {
      setFormData({...formData, [name]: e.target.checked})
    }
    else {
      setFormData({...formData, [name]:value})
    }
  }

  

  function handleSubmit(e){
    e.preventDefault()
    setSettings(formData)
    history('../home')
  }

  return (
      <Div>
        <br></br>
        <StyledForm onSubmit={handleSubmit}>
          <h3>Game Settings</h3>
          <label>Passcode Length</label>
          <StyledInput type='number' name="passwordLength" value={formData.passwordLength} onChange={handleChange}></StyledInput>
          <br></br>
          <label>Max Number of Forced Guesses</label>
          <StyledInput type='number' name="randomEventsLimit" value={formData.randomEventsLimit} onChange={handleChange}></StyledInput>
          <br></br>
          <label>Number of Game Boards</label>
          <StyledInput type='number' name="numberOfGameBoards" value={formData.numberOfGameBoards} onChange={handleChange}></StyledInput>
          <br></br>
          <label><input type='checkbox' name="showTimer" checked={formData.showTimer} onChange={handleChange}></input> Display Timer?</label>
          <br></br>
          <StyledSubmit type='submit'>Submit</StyledSubmit>
        </StyledForm>
      </Div>
  )
}

export default SettingsForm