import React, { useState } from 'react';
import Load from '../components/quote/Load.jsx';
import Quote from '../components/quote/Quote.jsx';
import { getQuote } from '../services/SimpsonsAPI.jsx';

const spinner =
  'https://thumbs.gfycat.com/ShamefulWhisperedHumpbackwhale-max-1mb.gif';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const quote = await getQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <>
      <Load onClick={handleClick} />
      {loading ? (
        <img src={spinner} alt="Loading" />
      ) : (
        quote && (
          <Quote
            quote={quote.quote}
            character={quote.character}
            image={quote.image}
          />
        )
      )}
    </>
  );
};

export default SimpsonsQuote;
