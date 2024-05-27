
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';
import Alert from './Alert';
import Textform from './Textform';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import SignupForm from './SignupForm';

const App = () => {

  const [b,setb]=useState('Enable dark mode');
  const [clr,setclr]=useState('black');
  const [mode,setmode]=useState('light');
  const toggle=()=>{
    if (mode==='light') {
      setmode('dark');
      setclr('light');
      setb('Disable dark mode');
      document.body.style.backgroundColor='black';
      showalert('Dark mode has been enabled',"success")
    } else {
      setmode('light');
      setclr('black');
      setb('Enable dark mode');
      document.body.style.backgroundColor='white';
      showalert('Dark mode has been disabled',"success")

    }
  };


  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      message: message,
      type:type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);};
    return (
      <>
      
        <Router>
        <Navbar title='TEXT' b={b} clr={clr} mode={mode} toggle={toggle}/>
        <Alert alert={alert}/>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/ " element={<Home/>} />
                <Route path="/login" element={<Login mode={mode} showalert={showalert} /> } />
                <Route path="/signup" element={<SignupForm/>} />
                <Route path="/Textform" element={<Textform showalert={showalert}  />} />
                <Route path="/about" element={<About mode={mode}/>} />
            </Routes>
            {/* <Footer/> */}
        </Router>
        </>
    );
};

export default App;
