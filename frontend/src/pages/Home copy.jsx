import Hero from '../cmps/Hero'
import HomeParquets from '../cmps/HomeParquets'
import HomeProjects from '../cmps/HomeProjects'
import { useState, useEffect, useRef } from 'react'

const HomePage = () => {
    // const [isHeroVisible, setIsHeroVisible] = useState(true)
    // const [isParquetsVisible, setIsParquetsVisible] = useState(false)
    // const [isProjectsVisible, setIsProjectsVisible] = useState(false)

    const [componentVisibility, setComponentVisibility] = useState({
        hero: true,
        parquets: false,
        projects: false,
      });


    const heroRef = useRef(null)
    const parquetsRef = useRef(null)
     const projectsRef = useRef(null)

     
    // const handleScroll = () => {
    //     if (!heroRef.current) return
    //     const heroHeight = heroRef.current.clientHeight
    //     const currentScroll = window.scrollY
    //     setIsHeroVisible(currentScroll < (heroHeight*0.75))
    // }


    // const handleScroll = () => {
    //     checkVisibility(heroRef, setIsHeroVisible)
    //     checkVisibility(parquetsRef, setIsParquetsVisible)
    //     checkVisibility(projectsRef, setIsProjectsVisible)
    // }

    const handleScroll = () => {
        checkVisibility(heroRef, 'hero');
        checkVisibility(parquetsRef, 'parquets');
        checkVisibility(projectsRef, 'projects');
      };

    // const checkVisibility = (ref, setState) => {
    //     if (!ref.current) return
    //     const elementHeight = ref.current.clientHeight
    //     const currentScroll = window.scrollY
    //     setState(currentScroll < elementHeight * 0.75)
    //   }



      const checkVisibility = (ref, componentName) => {
        if (!ref.current) return;
        // const elementHeight = ref.current.clientHeight;
        // const currentScroll = window.scrollY;

        const { top, bottom } = ref.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        setComponentVisibility((prevVisibility) => ({
            ...prevVisibility,
            [componentName]: isVisible,
          }));
        };
    
    //     setComponentVisibility((prevVisibility) => ({
    //       ...prevVisibility,
    //       [componentName]: currentScroll < elementHeight * 0.75,
    //     }));
    //   };
    



    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <>
            {/* <Hero ref={heroRef} isVisible={isHeroVisible} />
            <HomeParquets ref={parquetsRef} isVisible={isParquetsVisible} />
            <HomeProjects ref={projectsRef} isVisible={isProjectsVisible}/> */}




            <Hero ref={heroRef} isVisible={componentVisibility.hero} />
      <HomeParquets ref={parquetsRef} isVisible={componentVisibility.parquets} />
      {/* <HomeProjects ref={projectsRef} isVisible={componentVisibility.projects} /> */}
        </>

    )
}

export default HomePage