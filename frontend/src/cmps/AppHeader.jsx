import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { navLinks } from '../constants/index.js'
import { logo, menu, close } from '../assets'

const AppHeader = () => {
    const [active, setActive] = useState('')
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="header-container full">
            <div className="header-content">
                <section className="navigation">
                    <ul>
                        {/* {navLinks.map((link))} */}
                    </ul>
                </section>

                <section className="logo" onClick={()=>{navigate('/')}}>
                    <img className='logo-img' src={logo} alt="logo" />
                    
                </section>
            </div>
        </div>
    )
}

export default AppHeader