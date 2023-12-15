import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface DropDownProps {
  options: string[];
  iconPosition?: 'left' | 'right';
}

const DropDown: React.FC<DropDownProps> = ({ options, iconPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          onClick={toggleDropdown}
          className='inline-flex justify-center w-16 rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-250'
          id='options-menu'
          aria-haspopup='true'
          aria-expanded='true'
        >
          {iconPosition === 'left' && <ChevronDownIcon />}
          {selectedOption}
          {iconPosition === 'right' &&
            (isOpen === true ? (
              <ChevronDownIcon className='w-5 ml-1' />
            ) : (
              <ChevronUpIcon className='w-5 ml-1' />
            ))}
        </button>
      </div>

      {isOpen && (
        <div
          className='origin-top-right absolute right-0 mt-2 w-1/2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <div className='py-1' role='none'>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
