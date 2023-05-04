import { useRef, useEffect, useState } from 'react';

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

let backgroundColor = undefined;
backgroundColor = `hsl(180, 50%, 50%)`;
let sunStartX = window.innerWidth / 8;
//src/screens/Home.js
function App() {
  const [degree, setDegree] = useState(0);
  const [hue, setHue] = useState(180);
  const [brightness, setBrightness] = useState(50);
  const [currentTab, setCurrentTab] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  function handleSlide(event) {

    setDegree(event.target.value);
    if (degree < 90) {
      let newHue = parseInt(degree) + 180;
      setHue(newHue);
      console.log(`hue: ${hue}`);
      backgroundColor = `hsl(${hue}, 50%, 50%)`;
    } else {
      let newHue = 90 - parseInt(degree) % 90 + 180;
      setHue(newHue);
      let conversionFactor = 50 / 90;
      setBrightness(newHue * conversionFactor - 101)
      console.log(`brightness: ${brightness}`);
      backgroundColor = `hsl(${hue}, 50%, ${brightness}%)`;
    }

  }
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

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, width, height);
    // Set canvas dimensions to match screen width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setWidth(canvas.width);
    setHeight(canvas.height);

    context.fillStyle = backgroundColor;

    //draw in the sun
    const sun = new Path2D();
    context.fillStyle = "#DFEE10";
    console.log("SunstartX is " + sunStartX + "Degree is " + degree);
    let newX = sunStartX + parseInt(degree) * 50;
    let newY = sunTrajectory(newX);
    console.log(`newX is: ${newX} and newY is: ${newY}`)
    sun.arc(newX, newY, 100, 0, 2 * Math.PI);
    context.fill(sun);
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.stroke(sun);

    // draw in the hills
    const circle = new Path2D();
    let hillBrightness = 30;
    if (parseInt(brightness) < 30) {

    }


    context.fillStyle = `hsl(110, 50%, ${parseInt(brightness - 10)}%)`;

    circle.arc(width - 100, height, 500, Math.PI, 2 * Math.PI);
    context.fill(circle);
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.stroke(circle);
    circle.arc(width - width / 2, height, 500, Math.PI, 2 * Math.PI);
    context.fill(circle);
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.stroke(circle);
    circle.arc(0, height, 600, Math.PI, 2 * Math.PI);
    context.fill(circle);
  }, [degree, hue, height, brightness, width]); // dependency array. Whenever something in this array changes, useEffect will be called again.

  return (
    <div className="App" style={{ position: 'relative', zIndex: 0 }}>
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        background: backgroundColor

      }}
      ></canvas>
      <header class="App-header" style={
        {
          // opacity: "50%"

        }

      } >
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
        <input type="range" min="0" max="150" defaultValue={"0"} value={degree} onChange={handleSlide} style={{
          width: '25%',
          opacity: "100%"
        }} />

      </header>
    </div >
  );
}

/**
 * takes in some x value as the horizontal coordinate, and gives the height
 * @param {} x 
 */
function sunTrajectory(x) {
  x = x - window.innerWidth / 2;
  let y = x * (1 / 5000) * x;
  console.log(`x is: ${x} and y is: ${y}`);
  return y;
}

export default App;
