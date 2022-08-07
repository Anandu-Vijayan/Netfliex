import React from 'react'
import NavBar from './Components/Navbar/NavBar.js';
import{action,originals,romance,horror,comedy,documentaries} from './urls'
import './App.css'
import Bannar from './Components/Bannar/Bannar.js';
import RowPost from './Components/RowPost/RowPost.js';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Bannar/>
     <RowPost url={originals} title='Netflix Originals' />
     <RowPost url={action}title='Action' isSmall  />
     <RowPost url={romance}title='Romance' isSmall  />
     <RowPost url={horror}title='Horror' isSmall  />
     <RowPost url={comedy}title='Comedy' isSmall  />
     <RowPost url={documentaries}title='Documentaries' isSmall  />

    </div>
  );
}

export default App;
