import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { navLinks } from '../constants/index.js'
import { logo, menu, close } from '../assets'

const AppHeader = () => {
    const [active, setActive] = useState('')
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname

    let dynBorderClass = (currentPath === '/') ? '' : 'header-bcg'

    function onNavLink(linkId) {
        setActive(linkId)
        navigate(`/${linkId}`)
    }


    return (
        <>
            <div className={`header-container full ${dynBorderClass}`}>
                {toggleMobileMenu &&
                    <div className='hide-bcg' onClick={() => setToggleMobileMenu(false)}></div>
                }

                <div className="header-content">
                    <section className="logo" onClick={() => { navigate('/') }}>
                        <img className='logo-img' src={logo} alt="logo" />

                    </section>
                    <section className="navigation">
                        <ul className='nav-links-container'>
                            {navLinks.map((link) => (
                                <li key={link.id}
                                    onClick={() => onNavLink(link.id)}
                                    className={`${active === link.id ? 'nav-link active' : 'nav-link'}`}>
                                    {link.title}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="mobile-navigation">
                        <img className='menu-icon' src={toggleMobileMenu ? close : menu}
                            alt="menu" onClick={() => setToggleMobileMenu(!toggleMobileMenu)} />

                        <ul className={`${toggleMobileMenu ? 'mobile-nav-links-container' : 'hide'}`}>
                            {navLinks.map((link) => (
                                <li key={link.id}
                                    onClick={() => {
                                        setToggleMobileMenu(false)
                                        onNavLink(link.id)
                                    }}
                                    className={`${active === link.id ? 'nav-link active' : 'nav-link'}`}>
                                    {link.title}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AppHeader