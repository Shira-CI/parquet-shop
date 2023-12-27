import Hero from '../cmps/Hero'
import HomeParquets from '../cmps/HomeParquets'
import { useState, useEffect, useRef } from 'react'
import HomeProjects from '../cmps/HomeProjects'
import { InView } from 'react-intersection-observer'

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false)

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

  return (
    <>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <Hero ref={ref} isVisible={inView} />
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <HomeParquets ref={ref} isVisible={inView} />
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