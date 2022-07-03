import React, { useEffect, useState } from 'react'

import './programming-history.css'
import { PROGRAMMING_EXPERIENCES } from '../../constants/programming-experiences'

const ProgrammingHistory = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const initialClick = (index) => {
    const currentPanel = document.getElementById('panel-' + index)
    const tabComponent = currentPanel.closest('.tab-component')
    const slider = tabComponent.getElementsByClassName('selected-tab-item')[0]
    const currentTab = document.getElementById('tab-' + index)

    slider.style.width = currentTab.clientWidth + 'px'

    const largestPanel = document.getElementById('panel-' + 4)
    const content = largestPanel.closest('.tab-content')
    content.style.height = largestPanel.clientHeight + 'px'
  }

  useEffect(() => {
    initialClick(0)
  })

  const clickOnTab = (e, tabIndex) => {
    const currentPanel = document.getElementById(`panel-${currentIndex}`)
    const newPanel = document.getElementById(`panel-${tabIndex}`)
    newPanel.classList.toggle('activated')
    currentPanel.classList.toggle('activated')

    const newTab = e.currentTarget
    const currentTab = document.getElementById(`tab-${currentIndex}`)
    const tabComponent = newTab.closest('.tab-component')

    currentTab.classList.toggle('activated')
    newTab.classList.toggle('activated')

    const slider = tabComponent.getElementsByClassName('selected-tab-item')[0]
    const mediaQuery = window.matchMedia('(max-width: 550px)')

    slider.style.width = newTab.clientWidth + 'px'

    if (mediaQuery.matches) {
      const tabWidthGap = `calc(${tabIndex}*120px)`
      const paddingGap = `calc(${tabIndex}*0px)`
      const transformXString = `translateX(calc(${tabWidthGap}} + ${paddingGap}))`
      slider.style.transform = transformXString
    } else {
      const tabHeightGap = `calc(${tabIndex}*31.25px)`
      const paddingGap = `calc(${tabIndex}* var(--tab-height))`
      const transformYString = `translateY(calc(${tabHeightGap} + ${paddingGap}))`
      slider.style.transform = transformYString
    }

    setCurrentIndex(tabIndex)
  }

  return (
    <div className="programming-history">
      <h2>📜 Programming History</h2>

      <div className="tab-component">
        <div className="tab-menu">
          {PROGRAMMING_EXPERIENCES.map((element, index) => {
            return (
              <button
                aria-label={element.company}
                key={index}
                className={'tab-item ' + (index === 0 ? 'activated' : '')}
                id={'tab-' + index}
                onClick={(e) => clickOnTab(e, index)}
              >
                {element.company}
              </button>
            )
          })}

          <div className="selected-tab-item"></div>
          <div className="menu-border"></div>
        </div>

        <div className="tab-content">
          {PROGRAMMING_EXPERIENCES.map((element, index) => {
            return (
              <div key={index}>
                <div
                  className={'tab-panel ' + (index === 0 ? 'activated' : '')}
                  id={'panel-' + index}
                >
                  <h3>
                    <span className="company-role">{element.role}</span>
                    <span className="company-name"> @ {element.company}</span>
                  </h3>
                  <p className="date-range">{element.dateRange}</p>
                  <div>
                    <div className="company-description">
                      {element.description}
                    </div>
                    <ul className="experience-points">
                      {element.bullets.map((element, index) => {
                        return <li key={index}>{element}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProgrammingHistory
