import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './Component';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import FAQ from './Pages/FAQ';
import Playground from './Pages/Playground';
import Playground2 from './Pages/Playground2';
const RoutesPage: React.FC = () => {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
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
