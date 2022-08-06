import React from 'react'
import NavBar from './Components/Navbar/NavBar.js';
import './App.css'
import Bannar from './Components/Bannar/Bannar.js';
import RowPost from './Components/RowPost/RowPost.js';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Bannar/>
     <RowPost/>
    </div>
  );
}

export default App;
