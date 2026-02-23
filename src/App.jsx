import { useState } from 'react'
import './App.css'
import padData from '../data/pads'
import Pad from '../components/Pad'



function App(props) {

  const [isDarkMode, setIsDarkMode] = useState(props)
  const [isPad, setIsPad] = useState(padData)

  // function toggleDarkMode(){
  //   console.log(isPad.color)
  //   setIsDarkMode(prevMode=>(!prevMode))
  // }


  const styles={
    backgroundColor: isDarkMode ? '#222222' : '#cccccc',
  }

  function toggle(id){
    console.log(id)
    
    setIsPad(prevPad=> prevPad.map(pad =>
      id === pad.id ? {...pad, on: !pad.on} : pad
    ))

    
  }

  const buttonElement = isPad.map(pad => (

    <Pad id={pad.id} key={pad.id} color={pad.color} on={pad.on} toggle={toggle}/>
     
  ))

  return (
    <div className='w-full min-h-screen flex items-center justify-center' style={styles} >
     <div className='grid sm:grid-cols-4 grid-cols-2 w-max h-max gap-4'>
      {buttonElement}
     </div>
    </div>
  )
  
}

export default App