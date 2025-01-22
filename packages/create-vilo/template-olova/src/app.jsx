import Olova, { $signal, $memo } from "olova";
import "./style.css";

const App = () => {
  const [count, setCount] = $signal(0);
  const result = $memo(() => count * 2, [count]);

  return (
    <>
      <div className="app-container">
        <main className="main-content">
          <div className="hero-section">
            <h1 className="title">
              Welcome to <span className="highlight">Olova</span>
            </h1>
            <p className="subtitle">The Bangladeshi Framework</p>

            <div className="counter-section">
              <button
                className="primary-button"
                onClick={() => setCount(count + 1)}
              >
                Count: {count}
              </button>
              <p className="counter-value">Double value: {result}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
