import logo from './logo.svg';
import './App.css';
import Home from './screens/Projects.js';
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  ButtonGroup,
  Avatar,
  Fab
} from '@mui/material';
import profilePic from './images/tahoePic.png';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


import { useState } from 'react';
//src/screens/Home.js
function App() {

  const [value, setValue] = useState(0);

  async function openLink(link) {
    window.open(link, '_blank');
  }

  async function openEmailClient() {
    window.open('mailto:gregorystocker2@gmail.com', '_blank');
  }

  return (
    <div className="App">
      <header class="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          DeleteIcon />


        <Avatar alt="Greg Stocker"
          sx={{
            bgcolor: 'primary.light',
            width: 75,
            height: 75,

          }}

          src={profilePic}


        >GS</Avatar>

        <ButtonGroup
          color="secondary"
          variant="contained"
        >

          <Button
            onClick={async () => { await openLink("https://github.com/gregorystocker") }}
            class="mdc-button"
            color="primary"
            variant="outlined"
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>

          <Button

            onClick={async () => { await openLink("https://www.linkedin.com/in/gregory-stocker-395a01159") }}
            class="mdc-button"
            color="primary"
            variant="outlined"
            startIcon={<LinkedInIcon />}

          >
            LinkedIn
          </Button>

          <Button
            class="mdc-button"
            color="primary"
            variant="outlined"
            startIcon={<EmailIcon />}
            onClick={async () => { await openEmailClient() }}
          >
            Email
          </Button>

        </ButtonGroup>
        <Fab
          class="mdc-button"
          color="primary"
          variant="extended"
          aria-label="add"
          startIcon={<EmailIcon />}
          onClick={async () => { await openEmailClient() }}
        >
          Projects
        </Fab>


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
