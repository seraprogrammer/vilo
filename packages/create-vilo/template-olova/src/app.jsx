import { $state } from "olova";
import "./style.css";
import Logo from "/olova.png";

const App = () => {
  const [count, setCount] = $state(0);
  return (
    <>
      <div className="gradient-bg bg-1"></div>
      <div className="gradient-bg bg-2"></div>

      <div className="container">
        <div className="logo">
          <a href="https://github.com/olovajs/olova">
            <img src={Logo} alt="" />
          </a>
        </div>
        <h1>Vite + Olova</h1>
        <p>
          Click on the Olova logo to learn more about framework, or edit
          <code>src/App.jsx</code> and save to test updates.
        </p>

        <div className="count-btn">
          <button className="button" onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
        </div>

        <div className="buttons">
          <a href="https://olova.js.org/" className="button primary">
            Get Started
          </a>
          <a href="https://olova.js.org/tryolova.html" className="button">
            Documentation
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
