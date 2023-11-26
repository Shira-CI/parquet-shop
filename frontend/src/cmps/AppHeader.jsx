import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { navLinks } from '../constants/index.js'
import { logo, menu, close } from '../assets'

const AppHeader = () => {
    const [active, setActive] = useState('')
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

    const navigate = useNavigate()

    const reversedNavLinks = [...navLinks].reverse()

    function onNavLink(linkId) {
        setActive(linkId)
        navigate(`/${linkId}`)
    }
    return (

        <div className="header-container full">
            <div className="header-content">
            <section className="logo" onClick={() => { navigate('/') }}>
                    <img className='logo-img' src={logo} alt="logo" />

                </section>
                <section className="navigation">
                    <ul className='nav-links-container'>
                        {reversedNavLinks.map((link) => (
                            <li key={link.id}
                                onClick={() => onNavLink(link.id)}
                                className={`${active === link.id ? 'nav-link active' : 'nav-link'}`}>
                                {link.title}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mobile-navigation">
                    <img src={toggleMobileMenu ? close : menu } alt="menu" onClick={() => setToggleMobileMenu(!toggleMobileMenu)} />

                    <ul className= {`${toggleMobileMenu ? 'mobile-nav-links-container' : 'hide'}`}>
                        {navLinks.map((link) => (
                            <li key={link.id}
                                onClick={() =>{
                                    setToggleMobileMenu(false)
                                    onNavLink(link.id)}}
                                className={`${active === link.id ? 'nav-link active' : 'nav-link'}`}>
                                {link.title}
                            </li>
                        ))}
                    </ul>
                </section>


               
            </div>
        </div>
    )
}

export default AppHeader