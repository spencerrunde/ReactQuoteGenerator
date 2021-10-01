import React, { useEffect, useState } from "react";

import twitterIcon from "../twitter-svgrepo-com.svg";

const Quotes = () => {
  // declaring quote and author state variable
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");

  // fires get quote and get color methods on initial load
  useEffect(() => {
    getQuote();
    getColor();
  }, []);

  // fetches quotes from json file
  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let quotesData = data.quotes;
        let randomNum = Math.floor(Math.random() * quotesData.length); // uses Math.random to find random array index
        let randomQuote = quotesData[randomNum]; // finds random quote

        setQuote(randomQuote.quote); // sets quote state
        setAuthor(randomQuote.author); // sets author state
      });
  };

  //this method is very similiar to the above
  const getColor = () => {
    //array used for app colors
    var colors = [
      "#1BA39C",
      "#019875",
      "#345A5E",
      "#152A23",
      "#355C7D",
      "#1E8BC3",
      "#3A539B",
      "#D25852",
      "#D2527F",
      "#9B59B6",
      "#AF851A",
      "#D47500",
      "#AA2E00",
      "#94030d",
      "#5C0819",
    ];

    let randomIndex = Math.floor(Math.random() * colors.length); // creates random index number
    let randomColor = colors[randomIndex]; // finds random color

    // console.log(randomColor); // logs color to console for testing purposes
    setColor(randomColor); // sets color state
  };

  // gets new quote and new color on button click
  const handleClick = () => {
    getQuote();
    getColor();
  };

  //html for component
  return (
    <div className="main" style={{ background: color, color: color }}>
      <div className="quote-box">
        <div className="text">{quote}</div>
        <div className="author">- {author}</div>

        <div className="buttons">
          <div className="socials">
            <a
              className="twitter"
              style={{ background: color }}
              href={`https://twitter.com/intent/tweet?text=${quote} -${author}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterIcon} alt="twitter logo" />
            </a>
          </div>
          <button
            onClick={handleClick}
            className="new-quote"
            style={{ background: color }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
