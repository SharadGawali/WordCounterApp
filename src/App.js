import "./App.css";
import Nav from "./Components/Nav";
import Dlmode from './Components/Dlmode';
import Form from "./Components/Form";
import React, {useState} from 'react'
import Alert from "./Components/Alert";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App() { 
  const[Mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
 const[Mode1, setMode1] =useState('black');

 const showAlert =(message, type)=>{
            setAlert({
              msg: message,
              type: type
            })
            setTimeout(()=>{
             setAlert(null);
            }, 3000); 
 }
  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert("Dark Mode Has Been Enabled","success");
        document.title = 'Edtech- Dark Mode';
        setInterval(()=>{
        document.title = 'Edtech- Text Converter';
        },2000)
        setInterval(()=>{
          document.title = 'Install- Text Converter';
          },1500)
       }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode Has Been Enabled","success");
        document.title = 'Edtech- Light Mode';
    }
};
  return (
    <>
    <Router>
      <Nav title="Hello" Mode={Mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
         
          <Routes Mode={Mode}>
          <Route exact path="/dlmode" element={<Dlmode/>}/>
          <Route exact path="/" element={<Form heading="Enter Your Data" showAlert={showAlert} Mode={Mode}/>}/>     
          
          </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;
