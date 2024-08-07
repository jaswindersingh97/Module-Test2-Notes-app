import React from 'react';
import './App.css'
import Left from './components/Left';
import Right from './components/Right';
import RightActual from './components/RightActual';
import AddNote from './components/AddNote';
function App() {
  return (
    <>
    <div className="container">
        {/* <Left/> */}
      <div className='right'>
      {/* <Right/> */}
      {/* <RightActual param={"groupname"}/> */}
      </div>
    </div>
    <div className='BlackScreen'> {/* Rename when needed */}
    <div className='AddNote'>
      <AddNote/>
    </div>
    </div>
    </>
  )
}

export default App
