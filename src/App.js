import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    // <div className="App">
      <>
        <Navbar title = 'My title' />
        <div className="container">
          {/* <TextForm heading = 'My Heading' />    */}
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
