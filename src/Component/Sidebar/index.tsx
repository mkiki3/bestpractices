import React from 'react';

import classNames from 'classnames';

interface SidebarProps {
  showSidebar: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, onClose }) => {
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
      <div>Home</div>
      <div>About</div>
      <div>FAQ</div>
      <div>Contact</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Sidebar;
