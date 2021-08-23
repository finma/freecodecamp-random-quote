import { useEffect, useState } from "react";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(
    "Kalau orang lain bisa, kenapa harus saya!"
  );
  const [author, setAuthor] = useState("finma");
  const [color, setColor] = useState("#f39c12");

  console.log(quotes);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(
          "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        );
        const data = await res.json();

        setQuotes(data.quotes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const getQuote = () => {
    setQuote(`${quotes[Math.floor(Math.random() * quotes.length)].quote}`);
    setAuthor(`${quotes[Math.floor(Math.random() * quotes.length)].author}`);
    setColor(`${colors[Math.floor(Math.random() * colors.length)]}`);
  };

  return (
    <div className="wrapper" style={{ backgroundColor: color }}>
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left" style={{ color: color }}></i>
          <span id="text" style={{ color: color }}>
            {quote}
          </span>
        </div>
        <div className="author" style={{ color: color }}>
          - <span id="author">{author}</span>
        </div>
        <div className="buttons">
          <div className="share">
            <a
              className="button"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
              href="/#"
              style={{ backgroundColor: color }}
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="button"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              href="/#"
              style={{ backgroundColor: color }}
            >
              <i className="fa fa-tumblr"></i>
            </a>
          </div>
          <button
            className="button"
            id="new-quote"
            onClick={getQuote}
            style={{ backgroundColor: color }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
