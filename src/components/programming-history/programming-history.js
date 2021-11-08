import * as React from 'react'

import './programming-history.css'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'AplyiD',
    dateRange: '2019/04/02 - Present',
    bullets: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ],
  },
  {
    role: 'Intern Node Developer',
    company: 'Halter',
    dateRange: '2018/03/23 - 2019/04/02',
    bullets: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Hypebeat',
    dateRange: '2017/01/03 - 2018/03/23',
    bullets: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ],
  },
]

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

  // currentPanel.style.display = 'block'
  currentPanel.style.visibility = 'visible'
  currentPanel.style.opacity = '1'
  currentTab.style.color = 'var(--body-font-color)'

  // 3. Update height (maybe width of tab slider)
  const slider = tabComponent.getElementsByClassName('selected-tab-item')[0]

  slider.style.width = currentTab.clientWidth + 'px'

  slider.style.transform =
    'translateY(calc(calc(' +
    tabIndex +
    '* var(--tab-height)) + calc(' +
    tabIndex +
    '*31.25px)))'
}

const tabs = experiences.map((element, index) => {
  return (
    <div
      class="tab-item"
      id={'tab-' + index}
      onClick={(e) => clickOnTab(e, index)}
    >
      {element.company}
    </div>
  )
})

const panelBullets = (bullets) => {
  return bullets.map((element) => {
    return <li>{element}</li>
  })
}

const contentPanels = experiences.map((element, index) => {
  return (
    <div class="tab-panel" id={'panel-' + index}>
      <h3>
        <span class="company-role">{element.role}</span>
        <span class="company-name"> @ {element.company}</span>
      </h3>
      <p class="date-range">{element.dateRange}</p>
      <div>
        <ul class="experience-points">{panelBullets(element.bullets)}</ul>
      </div>
    </div>
  )
})

const ProgrammingHistory = () => (
  <div class="programming-history">
    <h4>Programming History</h4>

    <div class="tab-component">
      <div class="tab-menu">
        {tabs}

        <div class="selected-tab-item"></div>
        <div class="menu-border"></div>
      </div>

      <div class="tab-content">{contentPanels}</div>
    </div>
  </div>
)

export default ProgrammingHistory
