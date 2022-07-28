# 👨🏻‍💻 [James Watt](https://www.jameswatt.io)
![](https://img.shields.io/github/license/Hiccup246/jameswatt)
![](https://img.shields.io/github/languages/code-size/Hiccup246/jameswatt)
![](https://img.shields.io/netlify/d3078349-99f7-4d67-88bf-41dcfac156e9)

![](https://i.imgur.com/CyKSg7h.png)

This project represents my personal website which acts as an interactive resume and displays my Job history, skills, projects and books which I am reading.

<br>

# 📖 Description
The primary motivation for this project was to experience the JAM stack architecture and to enhance my:
- React.JS skills
- Ability to manage CSS
- UX and design skills
- Component design skills

To ensure I was learning as much as possible I completed this project under two self restictions.
1. I could not use a CSS framework such as Bulma or Bootstrap
2. I had to use as few libraries as reasionably possible

The secondary motivation for this project was to create a centeralised digital space for myself where people can learn about my proffessional experiences.

The project itself is static website that is mobile friendly, designed in [Figma](https://www.figma.com/), built using [Gatsby.JS](https://www.gatsbyjs.com/) and deployed using [Netlify](https://www.netlify.com/).

<br>

# 🧠 Understanding the Project
The easiest way to get to grips with this project is to take a look at the `src/pages/index.js` file. This file serves as an entry point to understanding the application and a base from which to explore the rest of the project and its components.

The file itself composes a series of core components which are named almost identically to the core sections of the website and mimics the structure of the main page.

<br>

## Components
Each of these core components and the sub components which they utilise can be found within the `src/components` directory. Each component is contained within its own directory and contains an identially named `.js` and `.css` file which represent the component. Alongside these two files there are directories which contain further sub components which mimic the same structure. An example of this structure is shown below.

![](https://i.imgur.com/xFaWn2d.png)

<br>

## Data
This project is a static website and does not communicate with nor contain an API. As a result all the data structures you may see when exploring the components comes from static Javascript constants located within `src/constants`. These constants are denoted by capitalised snake case names such as `THEME_COLORS` or `PROGRAMMING_EXPERIENCES`.

The idea behind extracting these data objects from their components was to make it easier to maintain. For example, whenenver I finish reading a book I head to the `src/constants/books.js` constant and add another book entry.

<br>

## Layouts and Theming
After exploring the project and coming to understand the `src/pages/index.js` file and the various components found within `src/components` you may be curious as to how the theming works and where the header and footer are used. The key to understanding these functionalities is within the `gatsby-ssr.js`. The official docs for this file can be found [here](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/)

`gatsby-ssr.js` is a file specific to Gatsby which provides the ability to hook into the Gatsby server side rendering lifecycle. Aside from using this file to import global CSS files I have utilised three internal Gatsby APIs to enable theming and layouts. Note that the theming solution was taken from a [dark theme blog](https://www.joshwcomeau.com/react/dark-mode/) post by Josh Comeau.

<br>

### onRenderBody
This Gatsby API function is run when generating our pages HTML during the build process. Alongside this API we also utilise the `setPreBodyComponents` function which injects a React element above everything else in the `<body>` tag. In this instance I utilise these two API functions to inject a script which blocks the page render until it is complete.

This blocking script, called `MagicScriptTag` is reponsible for checking the users local browser storage for a theme item and then subsequently setting the appropriate theme via CSS variables. This script has to be blocking as we want the theme to be set before any content loads. For a more in depth explanation of this functionality and why `kanye west` makes an appearance in my code please see this [blog post](https://www.joshwcomeau.com/react/dark-mode/) by Josh Comeau which I followed.

<br>

### wrapPageElement
This Gatsby API allows page components to be wrapped by components that will not be unmounted on page changes. This is ideal for wrapping all my pages within my `src/components/base-layout` which contains my header and footer. This allows these components to keep their state between page changes and importantly does not reset the theme toggle button found in the top right.

<br>

### wrapRootElement
This Gatsby API allows components to wrap the root element of application. I use this API to wrap my entire application with my `ThemeProvider` which utilises react contexts to allow any component within my applicationto consume this provider and modify the theme.

<br>

## The blog
The blog functionality

<br>

# 🛠️ Usage
After cloning this repository, installing Node.JS and navigating to the root directory you can use the following commands to start the project:
- `npm install`
- `npm run develop`

More commands can be found in the scripts section of the `package.json` and in the [Gatsby.JS documentation](https://www.gatsbyjs.com/docs/reference/).

<br>

# ⛰️ Future Improvements
- Update blog template to use BEM css structure
- Consider the google lighthouse report color contrast issues and think about potential theme changes to correct this
- Analyse the programming history component and think about ways to eliminate component Ref usage in favour of state or functional components
