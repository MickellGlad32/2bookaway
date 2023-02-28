import './App.css';
import {Router} from 'react-router-dom'
import Navigation from './components/Navbar';


function App() {
  return (
    <Router>
      <Navigation/>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
    );
}

export default App;
