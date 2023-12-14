import Hero from '../cmps/Hero'
import { useState, useEffect, useRef } from 'react'

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(true)
    const heroRef = useRef(null)

    const handleScroll = () => {
        if (!heroRef.current) return
        const heroHeight = heroRef.current.clientHeight
        const currentScroll = window.scrollY
        setIsVisible(currentScroll < heroHeight)
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
            <Hero ref={heroRef} isVisible={isVisible} />
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
            <div>scsas</div>
        </>

    )
}

export default HomePage