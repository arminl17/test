import { Routes, Route } from 'react-router-dom';
import { createContext, useContext } from 'react';

import './App.scss';
import Navigation from './routes/Navigation/Navigation.comp';
import Home from './routes/Home/home.comp';
import Portfolio from './routes/Portfolio/portfolio.comps';
import AboutUs from './routes/About/about.comp';
import ContactUs from './routes/Contact/contact.comp';

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index='true' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<ContactUs />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
