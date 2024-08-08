  import React, { useState } from 'react';
  import './App.css'
  import Left from './components/Left';
  import Right from './components/Right';
  import RightActual from './components/RightActual';
  import AddNote from './components/AddNote';
  import {BrowserRouter,Routes,Route} from "react-router-dom";
  import Error from './components/Error';

  function App() {
    const [blackScreen,setBlackScreen]=useState(false);
    const toggle=()=>blackScreen?setBlackScreen(false):setBlackScreen(true);
    
    return (
    <BrowserRouter>
    
      <div className="container">
          <Left onButtonClk={toggle}/>
        <div className='right'>
          <Routes>
            <Route path='/' element={<Right/>} />
            <Route path='/GroupName/:index' element={<RightActual param="hi"/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </div>
      </div>
      {blackScreen && 
        <div className='BlackScreen' onClick={toggle}> 
          <div className='AddNote' onClick={(e) => e.stopPropagation()} >
            <AddNote onButtonClk={toggle}/>
          </div>
        </div>
      }
    </BrowserRouter>
      
    )
  }

  export default App
