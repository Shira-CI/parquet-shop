import { useState, useEffect, useRef } from 'react'
import { InView } from 'react-intersection-observer'
import Hero from '../cmps/Hero'
import HomeParquets from '../cmps/HomeParquets'
import HomeProjects from '../cmps/HomeProjects'
import { inView } from 'framer-motion'

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
      
    }
  }, [])
  
  useEffect(()=>{
    

    // console.log(isHeroVisible)

  } , [isHeroVisible])


  return (
    <>
      <InView triggerOnce>
        {({ inView, ref }) => {
          return <Hero ref={ref} isVisible={inView} setIsHeroVisible = {()=> setIsHeroVisible(inView)}/>;
        }}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <HomeParquets ref={ref} isVisible={inView}  />
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <HomeProjects ref={ref} isVisible={inView} isMobile={isMobile} />
        )}
      </InView>

      <div>jdjjdj</div>
      <div>jdjjdj</div>
      <div>jdjjdj</div>
      <div>jdjjdj</div>
      <div>jdjjdj</div>
      <div>jdjjdj</div>
    </>
  )
}

export default HomePage