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


  // const [componentVisibility, setComponentVisibility] = useState({
  //   hero: true,
  //   parquets: false,
  //   projects: false,
  // })






  // const heroRef = useRef(null)
  // const parquetsRef = useRef(null)
  // const projectsRef = useRef(null)


  // useEffect(() => {
  //   handleScroll()
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])


  // const handleScroll = () => {
  //     if (!heroRef.current) return
  //     const heroHeight = heroRef.current.clientHeight
  //     const currentScroll = window.scrollY
  //     setIsHeroVisible(currentScroll < (heroHeight*0.75))
  // }


  // const handleScroll = () => {
  //   isElementInViewport(heroRef, 'hero')
  //   isElementInViewport(parquetsRef, 'parquets')
  //   isElementInViewport(projectsRef, 'projects')
  // }


  // function isElementInViewport(element, componentName) {
  //   if (!element.current) return
  //   const rect = element.current.getBoundingClientRect()
  //   const isCompletelyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight
  //   const isPartiallyVisible = rect.top < window.innerHeight && rect.bottom >= 0


  //   setComponentVisibility((prevVisibility) => ({
  //     ...prevVisibility,
  //     [componentName]: isCompletelyVisible || isPartiallyVisible,
  //   }))
  // }

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



      {/* <Hero ref={heroRef} isVisible={componentVisibility.hero} /> */}
      {/* <HomeParquets ref={parquetsRef} isVisible={componentVisibility.parquets} /> */}
      {/* <HomeProjects ref={projectsRef} isVisible={componentVisibility.projects} isMobile={isMobile} /> */}
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