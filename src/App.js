import logo from './logo.svg';
import './App.css';
import Home from './screens/Home.js';
import {
  BottomNavigation,
  BottomNavigationAction,
  Button
} from '@material-ui/core';


import { useState } from 'react';
//src/screens/Home.js
function App() {
  const [num, setNum] = useState(0);
  const [value, setValue] = useState(0);
  function sayHello() {
    setNum(num + 1);

  }

  return (
    <div className="App">
      <header class="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button class="mdc-button" onClick={sayHello}>
          Add one to num</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          num is: {num}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home></Home>

        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" />
          <BottomNavigationAction label="Favorites" />
          <BottomNavigationAction label="Nearby" />
        </BottomNavigation>
      </header>
    </div>
  );
}

export default App;
