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
    { path: '/cookies', name: 'Cookies' },
    { path: '/cart', name: 'Cart' },
    { path: '/faq', name: 'FAQ' },
    { path: '/playground', name: 'Playground' },
  ];
  return (
    <div className='flex justify-start'>
      <img className='px-4 md:hidden' src={Menu} onClick={handleModal} />
      <Sidebar
        showSidebar={showSidebar}
        navItems={navItems}
        onClose={handleModal}
      />
      {navItems.map((x, id) => (
        <div key={id} className='px-2 hidden md:block'>
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
