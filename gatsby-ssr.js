import React from 'react'

import {
  SITE_THEME_KEY,
  THEME_COLORS,
  INITIAL_SITE_THEME_CSS_VAR,
} from './src/constants'

const LoadThemeTag = () => {
  const codeToRunOnClient = `
    (function() {
      function getInitialSiteTheme() {
        const persistedSiteThemePreference = window.localStorage.getItem(${SITE_THEME_KEY});

        const hasPersistedSiteTheme= typeof persistedSiteThemePreference === 'string';

        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedSiteTheme) {
          return persistedSiteThemePreference;
        }

        return 'light';
      }

      const siteTheme = getInitialSiteTheme();
      const root = document.documentElement;

      Object.entries(${THEME_COLORS}).forEach(([name, colorByTheme]) => {
        const cssVarName = '--' + name

        root.style.setProperty(cssVarName, colorByTheme[siteTheme])
      })

      root.style.setProperty(${INITIAL_SITE_THEME_CSS_VAR}, siteTheme);
    })()
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

// onRenderBody is a gatsby lifecycle method which is run when gatsby is generating our html
export const onRenderBody = ({ setPreBodyComponents }) => {
  // setPreBodyComponents will inject a react element 'above' everything else it builds in our <body> tag
  setPreBodyComponents(<LoadThemeTag />)
}
