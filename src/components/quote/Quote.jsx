import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, character, image }) => (
  <figure>
    <img src={image} alt={character} />
    <figcaption>
      &quot;{quote}&quot; - {character}
    </figcaption>
  </figure>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Quote;
