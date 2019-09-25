import React from 'react';
import logo from './logo.svg';
import './App.css';
import { t } from 'ttag';
import Message from "./Message";  

function App() {
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
          {t`Learn React`}
          <Message />
        </a>
      </header>
    </div>
  );
}

export default App;
