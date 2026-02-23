import { useState } from 'react'
import './App.css'
import pads from '../data/pads'
import Pad from '../components/Pad'



function App(props) {

  const [isDarkMode, setIsDarkMode] = useState(props)
  const [isPad, setIsPad] = useState(pads)

  function toggleDarkMode(){
    console.log(isPad.color)
    setIsDarkMode(prevMode=>(!prevMode))
  }

 

  const styles={
    backgroundColor: isDarkMode ? '#222222' : '#cccccc',
  }
  const buttonElement = isPad.map(pad => (

    <Pad key={pad.id} color={pad.color} on={pad.on}/>
     
  ))

  return (
    <div className='w-full min-h-screen flex items-center justify-center' style={styles}>
     <div className='grid grid-cols-4 w-max h-max gap-4'>
      {buttonElement}
     </div>
    </div>
  )
  
}

export default App
