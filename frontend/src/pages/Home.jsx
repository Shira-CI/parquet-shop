import Hero from '../cmps/Hero'
import HomeParquets from '../cmps/HomeParquets'
import { useState, useEffect, useRef } from 'react'
import HomeProjects from '../cmps/HomeProjects';

const HomePage = () => {

  const [componentVisibility, setComponentVisibility] = useState({
    hero: true,
    parquets: false,
    projects: false,
  });

  // console.log(componentVisibility)

  const heroRef = useRef(null)
  const parquetsRef = useRef(null)
  const projectsRef = useRef(null)


  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  // const handleScroll = () => {
  //     if (!heroRef.current) return
  //     const heroHeight = heroRef.current.clientHeight
  //     const currentScroll = window.scrollY
  //     setIsHeroVisible(currentScroll < (heroHeight*0.75))
  // }


  const handleScroll = () => {
    isElementInViewport(heroRef, 'hero')
    isElementInViewport(parquetsRef, 'parquets')
    isElementInViewport(projectsRef, 'projects')
  }


  function isElementInViewport(element, componentName) {
    if (!element.current) return
    const rect = element.current.getBoundingClientRect()
    const isCompletelyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight
    const isPartiallyVisible = rect.top < window.innerHeight && rect.bottom >= 0


    setComponentVisibility((prevVisibility) => ({
      ...prevVisibility,
      [componentName]: isCompletelyVisible || isPartiallyVisible,
    }))
  }

  return (
    <>
      <Hero ref={heroRef} isVisible={componentVisibility.hero} />
      <HomeParquets ref={parquetsRef} isVisible={componentVisibility.parquets} />
      <HomeProjects ref={projectsRef} isVisible={componentVisibility.projects} />
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
   <div>dwdasasa</div>
    </>
  )
}

export default HomePage