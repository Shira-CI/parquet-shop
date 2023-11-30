import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.scss'

import { store } from './store/store.js'
import AppHeader from './cmps/AppHeader.jsx'
import Footer from './cmps/Footer.jsx'
import About from './pages/About.jsx'
import ItemIndex from './pages/ItemIndex.jsx'
import ItemDetails from './pages/ItemDetails.jsx'
import HomePage from './pages/Home.jsx'

import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
function App() {

  return (
    <Provider store={store}>
    <Router>
      <div className='main-layout'>
        <AppHeader />
        <main className='main-app'>
          <Routes>
            <Route element={<HomePage />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<ItemIndex />} path='/item' />
            <Route element={<ItemDetails />} path='/item/:itemId'/>
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
