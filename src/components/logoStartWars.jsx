import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HomeLink from './HomeLink';

const LogoStarWars = () => {
  return (
    <Fragment>
      <div className="local-nav-logo center burger-orient-left">
        <Link to="/" className="logo-link">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
            alt="starWarsIcon"
          />
        </Link>
        <HomeLink />
      </div>
    </Fragment>
  );
};

export default LogoStarWars;
