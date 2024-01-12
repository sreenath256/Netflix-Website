import {useRef} from "react";
import HomeScreen from "./Screens/HomeScreen";

import './App.css'

import {  BrowserRouter as Router,  Routes,Route} from "react-router-dom";



function App() {
  const email=useRef()
  const getEmail=localStorage.getItem("emailData")

  const handleSubmit=()=>{
    if (email.current.value){
      localStorage.setItem("emailData","true")
    }
  }

  

  

  return (
  <div>
    <Router>
      <Routes>
    {
      
    
      getEmail?
      
      <Route exact path="/" element={<HomeScreen/>} />
      
      :
      <Route exact path="" element={
      <div className="Login">
      <div className="Login__Nav">
      <img  className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflixlogo" />
        <button className='Login__Button'>Login</button>

      </div>
      <div className="Login__Screen">
        <div className="LoginScreen__Label">
          <h1>Unlimited movies, TV shows and more.</h1>
        </div>

      
      <div className="Second__Label">
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p className='Third__label'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        

        <div className="Login__Option">
          <form onSubmit={handleSubmit}>
          <input className='email'  id='email_input' type='email' placeholder='Email address' ref={email}/>
     
          <button  className='getStarted__Button' >Get Started</button>
          
          </form>
        </div>
        </div>

      </div>

      }/>
      
       
        
        
    }
    </Routes>
    </Router>
    
    


  </div>
      /*<div className='Login'>
        <div className="Login__Nav"> 
          <img  className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflixlogo" />
          <button className='Login__Button'>Login</button>


        </div>
        <div className="Login__Screen">
          <div className="LoginScreen__Label">
            <h1>Unlimited movies, TV shows and more.</h1>
          </div>
        </div>
        <div className='Second__Label'>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h2 className='Third__label'>Ready to watch? Enter your email to create or restart your membership.</h2>

        </div>
        <div className="Login__Option">
          <input className='email'  id='email_input' type='email' placeholder='Email address' ref={email}/>
       
          <button  className='Login__Button' >Submit</button>
        </div>
      </div>
    </div>
   
  </div>*/
 
    
  );  
}
export default App;
