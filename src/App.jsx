/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import "./styles/App.css";

function App() {
  const [defaultAdvice, setRandomAdvice] = useState({
    id: "117",
    advice: "Try to not compliment people on things they don't control.",
  });

  async function getAdviceData() {
    await axios.get("https://api.adviceslip.com/advice").then((res) => {
      setRandomAdvice(res.data.slip);
    });
  }

  return (
    <>
      <div className="card">
        <h3>advice #{defaultAdvice.id}</h3>
        <p>
          <span>&quot;</span>
          {defaultAdvice.advice}
          <span>&quot;</span>
        </p>
        <div className="divider">
          {window.outerWidth > 768 ? (
            <img src="images/pattern-divider-desktop.svg" alt="" />
          ) : (
            <img src="images/pattern-divider-mobile.svg" alt="" />
          )}
        </div>

        <button
          onClick={() => {
            getAdviceData();
          }}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
