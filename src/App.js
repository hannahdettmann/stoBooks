import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">
          I'm a button!
        </Button>
        <p>
          Testing React
        </p>
      </header>
    </div>
  );
}

export default App;
