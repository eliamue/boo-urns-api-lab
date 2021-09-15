import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
  <button onClick={onClick} aria-label="Fetch!">
    Load Simpsons Quote
  </button>
);

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Load;
