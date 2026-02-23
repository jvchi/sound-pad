import { useState } from 'react'
import './App.css'
import pads from '../data/pads'
import Button from '../components/Button'



function App({ darkMode }) {

  const [isDarkMode, setIsDarkMode] = useState(darkMode)
  const [isPad, setIsPad] = useState(pads)

  function toggleDarkMode(){
    console.log(isPad.length)
    setIsDarkMode(prevMode=>(!prevMode))
  }
  const styles={
    backgroundColor: isDarkMode ? '#222222' : '#cccccc'
  }
  const buttonElement = isPad.map(pad => (
    <Button key={pad.id} style={{backgroundColor: pad.color}} onClick={toggleDarkMode}></Button>
  ))


  return (
    <div className='w-full min-h-screen flex items-center justify-center ' style={styles}>
     <div className='grid grid-cols-4 w-max h-max gap-4'>
      {buttonElement}
     </div>
    </div>
  )
  
}

export default App
