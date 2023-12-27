import React, { useEffect } from 'react'

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.scss'

import { store } from './store/store.js'
import AppHeader from './cmps/AppHeader.jsx'
import Footer from './cmps/Footer.jsx'
import About from './pages/About.jsx'
import ItemIndex from './pages/ItemIndex.jsx'
import ItemDetails from './pages/ItemDetails.jsx'
import HomePage from './pages/HomePage.jsx'
import ParquetSpc from './pages/ParquetSpc.jsx'

import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import MainCatalog from './pages/MainCatalog.jsx'
import ParquetLamination from './pages/ParquetLamination.jsx'
function App() {

  useEffect(() => {
    const handleLoad = () => {
      // console.log('App is fully loaded!')
    }

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    }
  }, [])


  return (
    <Provider store={store}>
      <Router>
        <div className='main-layout'>
          <AppHeader />
          <main className='main-app'>
            <Routes>
              <Route element={<HomePage />} path='/' />
              <Route element={<About />} path='/about' />
              <Route element={<MainCatalog />} path='/catalog' />
              <Route element={<ParquetSpc />} path='/catalog/spc' />
              <Route element={<ParquetLamination />} path='/catalog/lamination' />
              <Route element={<ItemIndex />} path='/item' />
              <Route element={<ItemDetails />} path='/item/:itemId' />
              <Route element={<Projects />} path='/project' />
              <Route element={<Contact />} path='/contact' />
            </Routes>
          </main>

          <Footer />
        </div>
       
      </Router>

    </Provider>
  )
}

export default App
