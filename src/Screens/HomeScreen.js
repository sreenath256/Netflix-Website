import React from 'react'
import Banner from "../Components/Banner/Banner";
import Footer from '../Components/Footer/Footer';
import Navbar from "../Components/Navbar/Navbar";
import Rowpost from '../Components/Rowpost/Rowpost';
import {action, Comedy, Documentaries, Horror, originals, Romantic} from '../urls'


function HomeScreen() {
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
        <Footer/>
        
        



    </div>
  )
}

export default HomeScreen