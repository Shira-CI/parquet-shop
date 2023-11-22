import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.scss'

// import { store } from './store/store.js'
import AppHeader from './cmps/AppHeader.jsx'
import Hero from './cmps/Hero.jsx'
import About from './pages/About.jsx'
import ProductIndex from './pages/ProductIndex.jsx'

import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
function App() {

  return (
    // <Provider store={store}>
    <Router>
      <div className='main-layout'>
        {/* <div className='hero-container full'> */}
        <AppHeader />
        {/* </div> */}
        <main className='main-app'>
          <Routes>
            <Route element={<Hero />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<ProductIndex />} path='/products' />
            <Route element={<Projects />} path='/projects' />
            <Route element={<Contact />} path='/contact' />
          </Routes>
        </main>


      </div>


    </Router>

    // </Provider>
  )
}

export default App
