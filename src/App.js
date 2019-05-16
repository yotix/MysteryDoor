import React from 'react';
import Home from './containers/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      You are given a <span role="img" aria-label="key">&#128273;</span> Choose the corresponding Door
      <Home/>
      </header>
    </div>
  );
}

export default App;
