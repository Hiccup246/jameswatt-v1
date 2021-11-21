import React, { useEffect } from 'react'

import './programming-history.css'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'AplyiD',
    dateRange: '2020/01 - Present',
    description:
      'APLYiD is a trusted & accredited digital ID solution (AML + KYC) designed to streamline your customer onboarding with a first-class user experience',
    bullets: [
      'Currently working as a full stack developer utilising Vue.JS, Angular.JS and Ruby on Rails to create AML and financial products from inception and design to deployment and maintinance',
      'Joined the company as the second developer and 13th employee and helped grow the product using agile practices into a strong team of 7 and an organisation of over 50 people',
      'Worked closley with the founders of the company, key sales staff, designers and customer support to design products from the ground up',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Hypebeat',
    dateRange: '2019/04 - 2019/09',
    description:
      'A social music application to aid artists in optimising their reach and influence using artifical intelligence',
    bullets: [
      'Worked closley with the founders of the company in an agile team to develop and expand the back-end of the main product using Koa.JS (JavaScript + TypeScript)',
      'Participated in key strategic meetings regarding business strategy and product design',
    ],
  },
  {
    role: 'Intern Software Developer',
    company: 'Halter',
    dateRange: '2018/11 - 2019/02',
    description:
      'Halter is a solar-powered GPS enabled smart collar, which guides cows around a farm using sound and vibrations, allowing farmers to automate herd movements and create virtual fences',
    bullets: [
      'Worked in two high performing agile teams which developed the minimal viable product of the company under tight product deadlines',
      'Developed and expanded the back-end and cloud infrastructure of the main product using Nest.JS (JavaScript + TypeScript), AWS, Swagger, OpenAPI and Docker',
      'Developed the front-end of the company by creating various internal support tools using the React.JS framework ',
    ],
  },
  {
    role: 'Intern Front End Developer',
    company: 'BNZ',
    dateRange: '2017/11 - 2018/02',
    description: "Bank of New Zealand is one of New Zealand's big four banks.",
    bullets: [
      'Developed front-end software using the React.JS framework alongside technologies such as JavaScript, HTML, CSS, JSS and Node.JS to create various visual frontend components',
      'Worked closely with experienced product designers and owners in a small agile team requiring tight communication',
      'Partially worked in an agile team to test the banks internal help and support system via automated unit tests and test plans using XMind and Postman',
    ],
  },
  {
    role: 'Student & Tutor',
    company: 'VUW',
    dateRange: '2016 - 2020',
    description:
      'Victoria University of Wellington is a university in Wellington, New Zealand. The university has a strong software engineering school and an impressive reputation regarding artifical intelligence research',
    bullets: [
      'Graduated with a Bachelors of Engineering with first class honours majoring in software',
      'Key study interests included artificial intelligence, software ethics and organisational culture',
      'Completed a year long thesis which involved developing a series of IoT connected radios for the purpose of tracking birds within dense native bush',
      'Worked as a computer science tutor helping students to understand algorithms and data structures',
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
      document.getElementById('panel-' + element).style.height = '0'
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

  // currentPanel.style.display = 'block'
  currentPanel.style.height = 'auto'
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

  //  slider.style.width = currentTab.clientWidth + 'px' can maybe do 120px here for tab width
  //  slider.style.transform =
  //    'translateX(calc(calc(' +
  //    tabIndex +
  //    '* 120px) + calc(' +
  //    tabIndex +
  //  '*0px)))'
}

const tabs = experiences.map((element, index) => {
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

const contentPanels = experiences.map((element, index) => {
  return (
    <div key={index} className="tab-panel" id={'panel-' + index}>
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
  )
})

const initialClick = (index) => {
  const currentPanel = document.getElementById('panel-' + index)
  const tabComponent = currentPanel.closest('.tab-component')
  const slider = tabComponent.getElementsByClassName('selected-tab-item')[0]
  const currentTab = document.getElementById('tab-' + index)


  currentPanel.style.height = 'auto'
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
