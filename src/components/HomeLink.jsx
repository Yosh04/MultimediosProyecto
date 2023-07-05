import React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = ({ children }) => {
  return (
    <button style={{ border: 'none' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '100%', border: 'none'  }}> 
      {children} 
      </Link>
    </button>
  );
};

export default HomeLink;
