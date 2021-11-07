import * as React from 'react'

import './programming-history.css'

const ProgrammingHistory = () => (
  <div class="programming-history">
    <h4>Programming History</h4>

    <div class="tab-component">
      <div class="tab-menu">
        <div class="tab-item">AplyiD</div>
        <div class="tab-item">Halter</div>
        <div class="tab-item">Hypebeat</div>
        <div class="tab-item">BNZ</div>
        <div class="tab-item">VUW</div>
        <div class="selected-tab-item"></div>
      </div>

      <div class="tab-content">
        <div class="tab-panel">
          <h3>
            <span>Software Engineer</span>
            <span> @ AplyiD</span>
          </h3>
          <p>xxx - xxx</p>
          <div>
            <ul class="experience-points">
              <li>xxxx</li>
              <li>xxxx</li>
              <li>xxxx</li>
              <li>xxxx</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProgrammingHistory
