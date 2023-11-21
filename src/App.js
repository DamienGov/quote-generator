// https://api.api-ninjas.com/v1/quotes?category=happiness

import { useEffect, useState } from "react";

export default function App() {
  const [getQuote, setQuote] = useState("");

  async function handleQuote() {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();

      // console.log(data);
      setQuote(data.slip.advice);
    } catch (err) {
      console.error("Error fetching quote:", err);
    }
  }

  useEffect(function () {
    handleQuote();
  }, []);

  return (
    <div className="wrapper">
      <header>Quote of the Day</header>
      <div className="content">
        <div className="quote-area">
          <p className="quote">{getQuote}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleQuote}>New Quote</button>
      </div>
    </div>
  );
}
