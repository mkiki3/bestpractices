import React from 'react';

import classNames from 'classnames';
import { navProps } from '../../types/nav';
import { Link } from 'react-router-dom';

interface SidebarProps {
  showSidebar: boolean;
  navItems: navProps[];
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  showSidebar,
  navItems,
  onClose,
}) => {
  return (
    <div
      className={classNames(
        'transition-transform transform  bg-pink-250  top-0 left-0 h-screen w-64 fixed text-black p-4 z-10',
        {
          '-translate-x-full': !showSidebar,
          'translate-x-0': showSidebar,
        }
      )}
    >
      <div className='absolute top-4 right-4' onClick={onClose}>
        X
      </div>
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
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Sidebar;
