import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


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
    <form onSubmit={handleSubmit}>
      <label> passwordLength</label>
      <input type='number' name="passwordLength" value={formData.passwordLength} onChange={handleChange}></input>
      <label> randomEventsLimit</label>
      <input type='number' name="randomEventsLimit" value={formData.randomEventsLimit} onChange={handleChange}></input>
      <label> numberOfGameBoards</label>
      <input type='number' name="numberOfGameBoards" value={formData.numberOfGameBoards} onChange={handleChange}></input>
      <label> showTimer</label>
      <input type='checkbox' name="showTimer" value={formData.showTimer} onChange={handleChange}></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default SettingsForm