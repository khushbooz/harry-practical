import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [oldMode, setOldMode] = useState('dark');
  const [newModes, setNewModes] = useState({
    mymode: 'light',
    title: 'My titles'
  });
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (newModes === 'light'){
      setNewModes('dark');
      document.body.style.backgroundColor = 'yellow'
      showAlert('my message', 'success');
      document.title = 'Dark'
      // setInterval(() => {
      //   document.title = 'It is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Buy Now'
      // }, 1500);
    } else {
      setNewModes('light');
      document.body.style.backgroundColor = 'green'
      showAlert('my fail message', 'success');
      document.title = 'Light';
      // setInterval(() => {
      //   document.title = 'It is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Buy Now'
      // }, 1500);
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    // <div className="App">
      <>
        <Navbar newModes = {newModes} oldMode = {oldMode} toggleMode = {toggleMode} />
        <Alert alert = {alert} />
        <div className="container">
          <TextForm heading = 'My Heading' newModes = {newModes} showAlert = {showAlert} />   
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
