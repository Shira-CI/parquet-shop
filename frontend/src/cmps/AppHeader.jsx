import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks } from '../constants/index.js'
import { logo, menu, close } from '../assets'

const AppHeader = () => {
    const [active, setActive] = useState('')
    const [dynHeaderBcg, setDynHeaderBcg] = useState('')
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname
    const heroHeight = useSelector(storeState => storeState.visibilityModule.hero)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const newHeaderBcg = (scrollY >= (heroHeight - 100)) ? 'header-bcg' : ''
            setDynHeaderBcg(newHeaderBcg)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [heroHeight])

    useEffect(() => {
        const newHeaderBcg = (currentPath === '/') ? '' : 'header-bcg'
        setDynHeaderBcg(newHeaderBcg)
        setActive(currentPath)
        // console.log(currentPath)
        // console.log(newHeaderBcg)
        // console.log(dynHeaderBcg) 
        // console.log(active) 
    }, [currentPath, active])


    function onNavLink(linkId) {
        setActive(linkId)
        navigate(`/${linkId}`)
    }

    return (
        <>
            <div className={`header-container full ${dynHeaderBcg}`}>
                {toggleMobileMenu &&
                    <div className='hide-bcg' onClick={() => setToggleMobileMenu(false)}></div>
                }

                <div className="header-content">
                    <section className="logo" onClick={() => {
                        navigate('/')
                        setActive('')
                    }}>
                        <img className='logo-img' src={logo} alt="logo" />

                    </section>
                    <section className="navigation">
                        <ul className='nav-links-container'>
                            {navLinks.map((link) => (
                                <li key={link.id}
                                    onClick={() => onNavLink(link.id)}
                                    className={`${active === ('/' + link.id) ? 'nav-link active' : 'nav-link'}`}>
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