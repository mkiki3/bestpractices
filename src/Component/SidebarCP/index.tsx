import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const ModalCP: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className=' bg-pink-250  top-0 left-0 h-screen w-64 md:w-1/4 bg-gray-800 text-white p-4 shadow-lg transform -translate-x-full md:translate-x-0 transition-all duration-300 ease-in-out'>
      <div>Home</div>
      <div>About</div>
      <div>FAQ</div>
      <div>Contact</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalCP;
