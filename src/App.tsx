import React from 'react';
import './App.css';
import RoutesPage from './RoutesPage';
import { useParams } from 'react-router-dom';

function App() {
  const { cookiename } = useParams();
  console.log('cookie', cookiename);
  return (
    <div className='w-full'>
      <RoutesPage />
    </div>
  );
}

export default App;
