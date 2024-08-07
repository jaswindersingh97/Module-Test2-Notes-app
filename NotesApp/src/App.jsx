import React, { useState } from 'react';
import './App.css'
import Left from './components/Left';
import Right from './components/Right';
import RightActual from './components/RightActual';
import AddNote from './components/AddNote';
function App() {
  const [blackScreen,setBlackScreen]=useState(false);
  const toggle=()=>blackScreen?setBlackScreen(false):setBlackScreen(true);
  
  return (
    <>
    <div className="container">
        <Left/>
      <div className='right'>
      {/* <Right/>
      <RightActual param={"groupname"}/> */}
      </div>
    </div>
    {blackScreen && 
      <div className='BlackScreen' onClick={toggle}> 
        <div className='AddNote' >
          <AddNote/>
        </div>
      </div>
    }
    
    </>
  )
}

export default App
