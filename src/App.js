import logo from './logo.svg';
import './App.css';
import Home from './screens/Home.js';
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  ButtonGroup
} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';


import { useState } from 'react';
//src/screens/Home.js
function App() {
  const [num, setNum] = useState(0);
  const [value, setValue] = useState(0);
  function incrementNum() {
    setNum(num + 1);
  }
  function decrementNum() {
    setNum(num - 1);
  }

  return (
    <div className="App">
      <header class="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          DeleteIcon />
        <ButtonGroup >
          <Button
            class="mdc-button"
            color="primary"
            startIcon={<DeleteIcon />}
            onClick={incrementNum}
          >
            increment num</Button>

          <Button
            class="mdc-button"
            color="secondary"

            startIcon={<SaveIcon />}
            onClick={decrementNum}
          >
            decrement num </Button>


        </ButtonGroup>

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
