import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundLink = ({ to, children }) => {
  return (
    <button>
      <Link to={"*"}>{children}</Link>
    </button>
  );
};

export default NotFoundLink;
