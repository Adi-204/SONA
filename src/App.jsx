import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact-us' element={<Contact />} />
        </Route>
    </Routes>
  )
}

export default App
