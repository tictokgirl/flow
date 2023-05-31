import logo from './logo.svg';
import './App.css';
import Test01 from './test01/Test01'
import Test0102 from './test01/Test02'
import Test02 from './test02/Test02'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Song Edit <code>src/App.js</code> and save to reload.
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
      <Test01 />
      <Test02 />
      <Test0102 />
    </div>
  );
}

export default App;
