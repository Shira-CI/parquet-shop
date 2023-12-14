import Hero from '../cmps/Hero'
import HomeParquets from '../cmps/HomeParquets'
import HomeProjects from '../cmps/HomeProjects'
import { useState, useEffect, useRef } from 'react'

const HomePage = () => {
    const [isHeroVisible, setIsHeroVisible] = useState(true)
    const heroRef = useRef(null)

    const handleScroll = () => {
        if (!heroRef.current) return
        const heroHeight = heroRef.current.clientHeight
        const currentScroll = window.scrollY
        setIsHeroVisible(currentScroll < heroHeight)
    }

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <>
            <Hero ref={heroRef} isVisible={isHeroVisible} />
            <HomeParquets />
            <HomeProjects />

        </>

    )
}

export default HomePage