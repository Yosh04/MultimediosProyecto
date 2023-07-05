import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NeonSpan from './NeonSpan';

const BarInfo = () => {
  const [activeRoute, setActiveRoute] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  return (
    <div className='AppBarInfoDiv'>
      <ul className='AppBarListInfo'>
        <li className='AppSocial-li'>
          <NavLink to="/news" isActive={() => activeRoute === '/news'}>
            <a href=" ">NEWS+FEATURES</a>
            {activeRoute === '/news' && <NeonSpan />}
          </NavLink>
        </li>
        <li className='AppSocial-li'>
        <NavLink to="/video" isActive={() => activeRoute === '/video'}>
            <a href=" ">VIDEO</a>
            {activeRoute === '/video' && <NeonSpan />}
          </NavLink>
        </li>
        <li className='AppSocial-li'>
          <NavLink to="/Films" isActive={() => activeRoute === '/Films'}>
            <a href=" ">FILMS</a>
            {activeRoute === '/Films' && <NeonSpan />}
          </NavLink>
        </li>
        <li className='AppSocial-li'>
          <NavLink to="/Series" isActive={() => activeRoute === '/Series'}>
            <a href=" ">SERIES</a>
            {activeRoute === '/Series' && <NeonSpan />}
          </NavLink>
        </li>
        <li className='AppSocial-li'>
          <NavLink to="/Interactive" isActive={() => activeRoute === '/Interactive'}>
            <a href=" ">INTERACTIVE</a>
            {activeRoute === '/Interactive' && <NeonSpan />}
          </NavLink>
        </li>
        <li className='AppSocial-li'>
          <NavLink to="/Community" isActive={() => activeRoute === '/Community'}>
            <a href=" ">COMMUNITY</a>
            {activeRoute === '/Community' && <NeonSpan />}
          </NavLink>
        </li>
        <li className='AppSocial-li'>
          <NavLink to="/Databank" isActive={() => activeRoute === '/Databank'}>
            <a href=" ">DATABANK</a>
            {activeRoute === '/Databank' && <NeonSpan />}
          </NavLink>
        </li>
        <li className='AppSocial-li'>
          <NavLink to="/DisneyPlus" isActive={() => activeRoute === '/DisneyPlus'}>
            <a href=" ">DISNEY+</a>
            {activeRoute === '/DisneyPlus' && <NeonSpan />}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BarInfo;
