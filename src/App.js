import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {action, Comedy, Documentaries, Horror, originals, Romantic} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Actions' isSmall/>
      <Rowpost url={Romantic} title='Romantic' isSmall/>
      <Rowpost url={Comedy} title='Comedy' isSmall/>
      <Rowpost url={Horror} title='Horror' isSmall/>
      <Rowpost url={Documentaries} title='Documentaries' isSmall/>

    </div>
  );
}

export default App;
