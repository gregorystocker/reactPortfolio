import logo from './logo.svg';
import './App.css';
import Home from './screens/Home.js';
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  ButtonGroup,
  Link,
  Typography
} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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

        <ButtonGroup
          color="primary"
          variant="contained"
        >

          <Button
            href="https://github.com/gregorystocker"
            class="mdc-button"
            color="primary"
            variant="text"
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>


          <Button
            href="https://www.linkedin.com/in/gregory-stocker-395a01159"
            class="mdc-button"
            color="primary"
            variant="text"
            startIcon={<LinkedInIcon />}
            onClick={decrementNum}
          >
            LinkedIn
          </Button>
        </ButtonGroup>
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
    </div >
  );
}

export default App;
