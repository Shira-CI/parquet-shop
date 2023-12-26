import React, { useState } from "react"
import { CarouselItem } from "./CarouselItem"

export function Carousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex, ev) => {
    console.log(newIndex)
    ev.preventDefault()
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= projects.length) {
      newIndex = projects.length - 1
    }
    setActiveIndex(newIndex)
  }

  return (

    <div className="carousel">
      <div
        className="inner"
        style={{
          transform: `translate(-${activeIndex * 100}%)`
        }}
      >
        {projects.map((project) => {
          return <CarouselItem key={project.id} imageUrl={project.img} width={"100%"} />
        })}
      </div>

      <div className="carousel-arrows">
        <section>
          <button
            className="button-arrow-forward"
            onClick={(ev) => {
              updateIndex(activeIndex + 1, ev)
            }}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </section>
        <section>
          <button
            className="button-arrow-back"
            onClick={(ev) => {
              updateIndex(activeIndex - 1, ev)
            }}
          >
            <span className="material-symbols-outlined arrow-back">arrow_back_ios</span>
          </button>
        </section>
      </div>

      <div className="indicators">
        {projects.map((project, index) => {
          return (
            <button
              key={index}
              className="indicator-button"
            >
              <span
                className={`fa-solid fa-circle ${index === activeIndex
                  ? "indicator-symbol-active"
                  : "indicator-symbol"
                  }`}
              >
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
