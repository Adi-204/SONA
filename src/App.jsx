import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Appetizer from './pages/Appetizer';
import MainCourse from './pages/MainCourse';
import Dessert from './pages/Dessert';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menu/appetizer' element={<Appetizer />} />
            <Route path='/menu/maincourse' element={<MainCourse />} />
            <Route path='/menu/dessert' element={<Dessert />} />
            <Route path='/contact-us' element={<Contact />} />
        </Route>
    </Routes>
  )
}

export default App
