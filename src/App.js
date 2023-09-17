import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const [oldMode, setOldMode] = useState('dark');
  const [newModes, setNewModes] = useState({
    mymode: 'light',
    title: 'My titles'
  });
  const toggleMode = (event) => {
    if (newModes === 'light'){
      setNewModes('dark');
      document.body.style.backgroundColor = 'yellow'
    } else {
      setNewModes('light');
      document.body.style.backgroundColor = 'green'
    }
  }
  return (
    // <div className="App">
      <>
        <Navbar newModes = {newModes} oldMode = {oldMode} toggleMode = {toggleMode} />
        <div className="container">
          <TextForm heading = 'My Heading' newModes = {newModes} />   
        </div>
        <About />
      </>

      /* <div className="blank"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now with Avi
        </a>
      </header> */
    // </div> 
  );
}

export default App;
