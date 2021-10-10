import React, {useEffect} from "react";
import WebFont from "webfontloader";
import logo from './logo.svg';
import './scss/App.scss';

function App() {


  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans:400,700', 'Source Code Pro:600']
      }
    })
  }, []);

  return (
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
