import React from 'react';
import { Link } from 'react-router-dom';

const NewsLink = ({ to, children }) => {
  return (
    <div style={{ width: '100%', height: '100%', textDecoration: 'none' }}>
      <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '100%' }}>
        {children}
      </Link>
    </div>
  );
};

export default NewsLink;
