import React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = ({ children }) => {
  return (
    <button>
      <Link to="/"> {children} </Link>
    </button>
  );
};

export default HomeLink;
