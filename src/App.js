import logo from './logo.svg';
import './App.css';
import Projects from './screens/Projects.js';
import Resume from './screens/Resume.js';
import AboutMe from './screens/AboutMe.js';
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


  const [currentTab, setCurrentTab] = useState(0);

  async function openLink(link) {
    window.open(link, '_blank');
  }

  async function openEmailClient() {
    window.open('mailto:gregorystocker2@gmail.com', '_blank');
  }

  function showTab() {
    switch (currentTab) {
      case "Projects":
        return <Projects />;
      case "About Me":
        return <AboutMe />;
      case "Home":
        return "Home";
      default:
        return "Home";
    }
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
        {showTab()}

        <BottomNavigation
          showLabels
          value={currentTab}
          onChange={(event, newTab) => {
            setCurrentTab(newTab);
          }}
        >
          <BottomNavigationAction label="Projects" value={"Projects"} />
          <BottomNavigationAction label="About Me" value={"About Me"} />
          <BottomNavigationAction label="Home" value={"Home"} />
        </BottomNavigation>

      </header>
    </div >
  );
}

export default App;
