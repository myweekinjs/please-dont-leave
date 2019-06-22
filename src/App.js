import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Gets the correct values based on browser
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API#Example
 */
const getBrowserHiddenProps = () => {
  let hidden, visibilityChange
  if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }

  return {
    hidden,
    visibilityChange
  }
}

function App() {
  const { hidden, visibilityChange } = getBrowserHiddenProps()

  if (typeof document.addEventListener !== "undefined" && typeof hidden !== "undefined") {
    document.addEventListener(visibilityChange, () => {
      if (document[hidden]) {
        document.title = "😭 PLEASE COME BACK!!"
      } else {
        document.title = "😍 YAY!"
      }
    }, false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
