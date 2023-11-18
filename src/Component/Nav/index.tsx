import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../Sidebar';
import Menu from '../../images/menu.svg';

const Nav: React.FC = () => {
  const [showSidebar, setSidebar] = useState(false);
  const handleModal = () => {
    setSidebar(!showSidebar);
  };

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/cart', name: 'Cart' },
    { path: '/faq', name: 'FAQ' },
    { path: '/playground', name: 'Playground' },
    { path: '/playground2', name: 'Playground2' },
  ];
  return (
    <div className='flex justify-start'>
      <img className='px-4' src={Menu} onClick={handleModal} />
      <Sidebar showSidebar={showSidebar} onClose={handleModal} />
      {navItems.map((x, id) => (
        <div key={id} className='px-2'>
          <Link
            to={{
              pathname: x.path,
            }}
          >
            {x.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Nav;
