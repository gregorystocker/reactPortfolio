import logo from './logo.svg';
import './App.css';
import Home from './screens/Home.js';
import { MDCRipple } from '@material/ripple';
import { useState } from 'react';
//src/screens/Home.js
function App() {
  const [num, setNum] = useState(0);
  function sayHello() {
    setNum(num + 1);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button class="mdc-button" onClick={sayHello}>
          Add one to num</button>
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
      </header>

    </div>
  );
}

export default App;
