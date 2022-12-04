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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


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

  function openLink(link) {
    window.open(link, '_blank');
  }

  function openEmailClient() {

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
            onClick={() => { openLink("https://github.com/gregorystocker") }}
            class="mdc-button"
            color="primary"
            variant="outlined"
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>

          <Button
            onClick={() => { openLink("https://www.linkedin.com/in/gregory-stocker-395a01159") }}
            class="mdc-button"
            color="primary"
            variant="outlined"
            startIcon={<LinkedInIcon />}
            onClick={decrementNum}
          >
            LinkedIn
          </Button>

          <Button
            class="mdc-button"
            color="primary"
            variant="outlined"
            startIcon={<EmailIcon />}
            onClick={decrementNum}
          >
            Email
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
