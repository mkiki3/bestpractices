import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './Component';
import {
  Home,
  Flavors,
  Contact,
  Cart,
  FAQ,
  Product,
  Playground,
} from './Pages';

const RoutesPage: React.FC = () => {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/flavors' element={<Flavors />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
          <Route path='/playground' element={<Playground />}></Route>
        </Routes>
      </>
    </Router>
  );
};

export default RoutesPage;
