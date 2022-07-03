import React, { useEffect, useState } from 'react'

import './programming-history.css'
import { PROGRAMMING_EXPERIENCES } from '../../constants/programming-experiences'

const ProgrammingHistory = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const tabComponentRef = React.createRef()
  const sliderComponentRef = React.createRef()
  const mobileViewWidth = '550px'

  const setupTabs = () => {
    const newSliderWidth = `${
      tabComponentRef.current.querySelector(`#tab-${currentIndex}`).clientWidth
    }px`
    sliderComponentRef.current.style.width = newSliderWidth
    tabComponentRef.current.style.height = largestPanelHeight()
  }

  const largestPanelHeight = () => {
    let largestPanelHeight = 0

    for (let i = 0; i < PROGRAMMING_EXPERIENCES.length; i++) {
      const panelHeight = tabComponentRef.current.querySelector(
        `#panel-${i}`
      ).clientHeight

      if (panelHeight > largestPanelHeight) {
        largestPanelHeight = panelHeight
      }
    }

    return `${largestPanelHeight}px`
  }

  const clickOnMenuItem = (element, newTabIndex) => {
    const currentPanel = tabComponentRef.current.querySelector(
      `#panel-${currentIndex}`
    )
    const newPanel = tabComponentRef.current.querySelector(
      `#panel-${newTabIndex}`
    )
    const currentTab = tabComponentRef.current.querySelector(
      `#tab-${currentIndex}`
    )
    const newTab = element.currentTarget

    newPanel.classList.toggle('activated')
    currentPanel.classList.toggle('activated')

    currentTab.classList.toggle('activated')
    newTab.classList.toggle('activated')

    updateTabMenu(newTabIndex, `${newTab.clientWidth}px`)
    setCurrentIndex(newTabIndex)
  }

  const updateTabMenu = (newTabIndex, newSliderWidth) => {
    const mediaQuery = window.matchMedia(`(max-width: ${mobileViewWidth})`)

    sliderComponentRef.current.style.width = newSliderWidth

    if (mediaQuery.matches) {
      const tabWidthGap = `calc(${newTabIndex}*var(--tab-width))`
      const transformXString = `translateX(${tabWidthGap})`
      sliderComponentRef.current.style.transform = transformXString
    } else {
      const paddingGap = `calc(${newTabIndex}* var(--tab-margin-top))`
      const tabHeightGap = `calc(${newTabIndex}* var(--tab-height))`
      const transformYString = `translateY(calc(${tabHeightGap} + ${paddingGap}))`
      sliderComponentRef.current.style.transform = transformYString
    }
  }

  useEffect(() => {
    setupTabs()
  }, [])

  return (
    <div className="programming-history">
      <h2>📜 Programming History</h2>
      <div className="tab-component" ref={tabComponentRef}>
        <div className="tab-menu">
          {PROGRAMMING_EXPERIENCES.map((element, index) => {
            return (
              <button
                aria-label={element.company}
                key={index}
                className={index === 0 ? 'tab-item activated' : 'tab-item'}
                id={`tab-${index}`}
                onClick={(element) => clickOnMenuItem(element, index)}
              >
                {element.company}
              </button>
            )
          })}

          <div ref={sliderComponentRef} className="selected-tab-item"></div>
          <div className="menu-border"></div>
        </div>

        <div className="tab-content">
          {PROGRAMMING_EXPERIENCES.map((element, index) => {
            return (
              <div
                key={index}
                className={index === 0 ? 'tab-panel activated' : 'tab-panel'}
                id={`panel-${index}`}
              >
                <h3>
                  <span className="company-role">{element.role}</span>
                  <span className="company-name"> @ {element.company}</span>
                </h3>
                <p className="date-range">{element.dateRange}</p>
                <div className="company-description">{element.description}</div>
                <ul className="experience-points">
                  {element.bullets.map((element, index) => {
                    return <li key={index}>{element}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProgrammingHistory
