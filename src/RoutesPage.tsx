import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './Component';
import {
  Home,
  About,
  Cookies,
  Contact,
  Cart,
  FAQ,
  Playground,
  Playground2,
} from './Pages';

const RoutesPage: React.FC = () => {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cookies' element={<Cookies />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
          <Route path='/playground' element={<Playground />}></Route>
          <Route path='/playground2' element={<Playground2 />}></Route>
        </Routes>
      </>
    </Router>
  );
};

export default RoutesPage;
