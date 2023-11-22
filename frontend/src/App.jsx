import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.scss'

// import { store } from './store/store.js'
import AppHeader from './cmps/AppHeader.jsx'
import Hero from './cmps/Hero.jsx'

function App() {

  return (
    // <Provider store={store}>
    <Router>
      <div className='main-layout'>
        <div className='hero-container full'>
        <AppHeader />
        {/* <Hero/> */}
        </div>
        <main className='main-app'>
          <Routes>
            {/* <Route element={<Hero />} path='/' /> */}
          </Routes>
        </main>


      </div>


    </Router>

    // </Provider>
  )
}

export default App
