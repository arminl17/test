import { Routes, Route } from "react-router-dom";
import { createContext, useContext } from "react";

import "./App.scss";
import Navigation from "./routes/Navigation/Navigation.comp";
import Home from "./routes/Home/home.comp";
import Static from "./routes/Static/Static.comp";
import AboutUs from "./routes/About/about.comp";
import ContactUs from "./routes/Contact/contact.comp";
import Architecture from "./routes/Architecture/Architecture.comp";
import References from "./routes/References/References.comp";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index='/true' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/architecture' element={<Architecture />} />
          <Route path='/static' element={<Static />} />
          <Route path='/references' element={<References />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
