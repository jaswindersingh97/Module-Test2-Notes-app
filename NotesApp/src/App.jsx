  import React, { useEffect, useState } from 'react';
  import './App.css'
  import Left from './components/Left';
  import Right from './components/Right';
  import RightActual from './components/RightActual';
  import AddNote from './components/AddNote';
  import {BrowserRouter,Routes,Route} from "react-router-dom";
  import Error from './components/Error';

  function App() {
    const [blackScreen,setBlackScreen]=useState(false);
    const AddNoteGroup=()=>setBlackScreen(!blackScreen);
    const [showRight, setShowRight] = useState(false);
    // const [selectedIndex, setSelectedIndex] = useState(null);  
    
    // useEffect(()=>{
    //   setSelectedIndex(null)
    // },[])

    const toggleView = () => {
      setShowRight(!showRight);
    };
    return (
    <BrowserRouter>
      <div className={`container ${showRight ? 'show-right' : ''}`}>
        <div className='left'>
          <Left onButtonClk={AddNoteGroup} fun={toggleView}/>
        </div>
        <div className='right'>
          <Routes>
            <Route path='/' element={<Right/>} />
            <Route path='/GroupName/:index' element={<RightActual fun={toggleView} />}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </div>
      </div>
      {blackScreen && 
        <div className='BlackScreen' onClick={AddNoteGroup}> 
          <div className='AddNote' onClick={(e) => e.stopPropagation()} >
            <AddNote onButtonClk={AddNoteGroup}/>
          </div>
        </div>
      }
    </BrowserRouter>
      
    )
  }

  export default App
