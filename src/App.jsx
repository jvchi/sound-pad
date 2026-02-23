import { useState } from 'react'
import './App.css'
import pads from '../data/pads'
import Button from '../components/Button'



function App(props) {

  const [isDarkMode, setIsDarkMode] = useState(props.darkMode)
  const [isPad, setIsPad] = useState(pads)

  function toggleDarkMode(){
    console.log(isDarkMode)

    setIsDarkMode(prevMode=>(!prevMode))
  }

  const buttonElement = isPad.map(pad => (
    <Button key={pad.id} style={{backgroundColor: pad.color}} onClick={toggleDarkMode}></Button>
  ))


  return (
    <div className='w-full min-h-screen flex items-center justify-center ' style={{backgroundColor: isDarkMode ? '#222222' : 'white'}}>
     <div className='grid grid-cols-4 w-max h-max gap-4'>
      {buttonElement}
     </div>
    </div>
  )
  
}

export default App
