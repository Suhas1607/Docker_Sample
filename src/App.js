import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A Sample <code>Docker and React Application</code> written by Suhas.          
        </p>        
        <a
          className="App-link"
          href="lights.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here For Demo
        </a>
      </header>
    </div>
  );
}

export default App;
