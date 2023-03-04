import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {Action,Originals} from './Urls'


import "./App.css"




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Originals" url={Originals}/>
      <RowPost title="Action" isSmall url={Action}/>
    </div>
  );
}

export default App;
