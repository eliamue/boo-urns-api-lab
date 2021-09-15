const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then((res) => res.json())
    .then((json) =>
      json.data.map((quote) => ({
        quote: quote.quote,
        character: quote.character,
        image: quote.image,
      }))
    );
};
export default getQuote;
