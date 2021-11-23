import React, { useEffect } from 'react'

import './programming-history.css'
import { PROGRAMMING_EXPERIENCES } from '../../constants'

const clickOnTab = (e, tabIndex) => {
  const currentTab = e.currentTarget
  const tabComponent = currentTab.closest('.tab-component')
  const id = 'panel-' + tabIndex
  const currentPanel = document.getElementById(id)

  // 1. Hide current pane and show new one
  // 2. Move selected class to new tab
  Array.from(Array(tabs.length).keys()).forEach((element) => {
    if (
      document.getElementById('panel-' + element).style.visibility === 'visible'
    ) {
      // document.getElementById('panel-' + element).style.display = 'none'
      document.getElementById('panel-' + element).style.visibility = 'hidden'
      document.getElementById('panel-' + element).style.opacity = '0'
      // document.getElementById('panel-' + element).style.height = '0'
      document.getElementById('panel-' + element).style.padding = '0'
    }

    if (
      document.getElementById('tab-' + element).style.color ===
      'var(--body-font-color)'
    ) {
      document.getElementById('tab-' + element).style.color =
        'var(--grey-font-color)'
      return
    }
  })

  currentPanel.style.paddingTop = '10px'
  currentPanel.style.visibility = 'visible'
  currentPanel.style.opacity = '1'
  currentTab.style.color = 'var(--body-font-color)'

  // 3. Update height (maybe width of tab slider)
  const slider = tabComponent.getElementsByClassName('selected-tab-item')[0]
  const mediaQuery = window.matchMedia('(max-width: 375px)')

  slider.style.width = currentTab.clientWidth + 'px'

  if (mediaQuery.matches) {
    slider.style.transform =
      'translateX(calc(calc(' +
      tabIndex +
      '* 120px) + calc(' +
      tabIndex +
      '*0px)))'
  } else {
    slider.style.transform =
      'translateY(calc(calc(' +
      tabIndex +
      '* var(--tab-height)) + calc(' +
      tabIndex +
      '*31.25px)))'
  }
}

const tabs = PROGRAMMING_EXPERIENCES.map((element, index) => {
  return (
    <div
      key={index}
      className="tab-item"
      id={'tab-' + index}
      onClick={(e) => clickOnTab(e, index)}
    >
      {element.company}
    </div>
  )
})

const panelBullets = (bullets) => {
  return bullets.map((element, index) => {
    return <li key={index}>{element}</li>
  })
}

const contentPanels = PROGRAMMING_EXPERIENCES.map((element, index) => {
  return (
    <div key={index}>
      <div className="tab-panel" id={'panel-' + index}>
        <h3>
          <span className="company-role">{element.role}</span>
          <span className="company-name"> @ {element.company}</span>
        </h3>
        <p className="date-range">{element.dateRange}</p>
        <div>
          <div className="company-description">{element.description}</div>
          <ul className="experience-points">{panelBullets(element.bullets)}</ul>
        </div>
      </div>
    </div>
  )
})

const initialClick = (index) => {
  const currentPanel = document.getElementById('panel-' + index)
  const tabComponent = currentPanel.closest('.tab-component')
  const slider = tabComponent.getElementsByClassName('selected-tab-item')[0]
  const currentTab = document.getElementById('tab-' + index)

  // currentPanel.style.height = 'auto'
  currentPanel.style.paddingTop = '10px'
  currentPanel.style.visibility = 'visible'
  currentPanel.style.opacity = '1'
  slider.style.width = currentTab.clientWidth + 'px'

  currentTab.style.color = 'var(--body-font-color)'
}

const ProgrammingHistory = () => {
  useEffect(() => {
    initialClick(0)
  });

  return(
    <div className="programming-history">
      <h4>📜Programming History</h4>

      <div className="tab-component">
        <div className="tab-menu">
          {tabs}

          <div className="selected-tab-item"></div>
          <div className="menu-border"></div>
        </div>

        <div className="tab-content">{contentPanels}</div>
      </div>
    </div>
  )
}

export default ProgrammingHistory
