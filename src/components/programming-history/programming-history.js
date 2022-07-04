import React, { useEffect, useState } from 'react'

import './programming-history.css'
import { PROGRAMMING_EXPERIENCES } from '../../constants/programming-experiences'
import ContentPanelButton from './content-panel-button/content-panel-button'
import ContentPanel from './content-panel/content-panel'

const ProgrammingHistory = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderStyle, setSliderStyle] = useState({ width: '100px' })

  const tabComponentRef = React.createRef()
  const mobileViewWidth = '550px'

  const setup = () => {
    const newSliderWidth = `${
      tabComponentRef.current.querySelector('.tab-item.activated').clientWidth
    }px`
    tabComponentRef.current.querySelector('.selected-tab-item').style.width =
      newSliderWidth
    tabComponentRef.current.style.height = largestPanelHeight()
  }

  const largestPanelHeight = () => {
    let largestPanelHeight = 0

    for (let i = 0; i < PROGRAMMING_EXPERIENCES.length; i++) {
      const panelHeight =
        tabComponentRef.current.querySelector('.tab-panel').clientHeight

      if (panelHeight > largestPanelHeight) {
        largestPanelHeight = panelHeight
      }
    }

    return `${largestPanelHeight}px`
  }

  const clickOnMenuItem = (newTabIndex, buttonWidth) => {
    updateTabMenu(newTabIndex, `${buttonWidth}px`)
    setCurrentIndex(newTabIndex)
  }

  const updateTabMenu = (newTabIndex, newSliderWidth) => {
    const mediaQuery = window.matchMedia(`(max-width: ${mobileViewWidth})`)
    let sliderTransform

    if (mediaQuery.matches) {
      const tabWidthGap = `calc(${newTabIndex}*var(--tab-width))`
      const transformXString = `translateX(${tabWidthGap})`
      sliderTransform = transformXString
    } else {
      const paddingGap = `calc(${newTabIndex}* var(--tab-margin-top))`
      const tabHeightGap = `calc(${newTabIndex}* var(--tab-height))`
      const transformYString = `translateY(calc(${tabHeightGap} + ${paddingGap}))`
      sliderTransform = transformYString
    }

    setSliderStyle({ width: newSliderWidth, transform: sliderTransform })
  }

  useEffect(() => {
    setup()
  }, [])

  return (
    <div className="programming-history">
      <h2>📜 Programming History</h2>
      <div ref={tabComponentRef} className="tab-component">
        <div className="tab-menu">
          {PROGRAMMING_EXPERIENCES.map((job, index) => {
            return (
              <ContentPanelButton
                companyName={job.company}
                activated={index === currentIndex}
                clickHandler={(width) => clickOnMenuItem(index, width)}
              />
            )
          })}

          <div style={sliderStyle} className="selected-tab-item"></div>
          <div className="menu-border"></div>
        </div>

        <div className="tab-content">
          {PROGRAMMING_EXPERIENCES.map((job, index) => {
            return <ContentPanel job={job} activated={index === currentIndex} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ProgrammingHistory
