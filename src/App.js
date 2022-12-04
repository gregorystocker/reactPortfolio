import logo from './logo.svg';
import './App.css';
import Home from './screens/Home.js';
//src/screens/Home.js
function App() {
  let num = "Hello Num";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
