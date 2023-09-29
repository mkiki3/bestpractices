import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/cart', name: 'Cart' },
    { path: '/faq', name: 'FAQ' },
    { path: '/playground', name: 'Playground' },
  ];
  return (
    <div className='flex justify-start border'>
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
