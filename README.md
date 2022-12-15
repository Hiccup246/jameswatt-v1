# 👨🏻‍💻 [James Watt](https://jameswatt-v1.netlify.app)
![](https://img.shields.io/github/license/Hiccup246/jameswatt)
![](https://img.shields.io/github/languages/code-size/Hiccup246/jameswatt)
![](https://img.shields.io/netlify/d3078349-99f7-4d67-88bf-41dcfac156e9)

![](https://i.imgur.com/CyKSg7h.png)

This project acts as an interactive resume and displays my Job history, skills, projects and books that I am reading.

<br>

# 📖 Description
The primary motivation for this project was to experience the JAM stack architecture and to enhance my:
- React.JS skills
- Ability to manage CSS
- UX and design skills
- Component design skills

To ensure I was learning as much as possible I completed this project under two restictions.
1. I could not use a CSS framework such as Bulma or Bootstrap
2. I had to use as few libraries as reasonably possible

The secondary motivation for this project was to create a centralized digital space for my digital identity where people can learn about my professional experiences.

The project itself is a static website that is mobile-friendly, designed in [Figma](https://www.figma.com/), built using [Gatsby](https://www.gatsbyjs.com/) and deployed using [Netlify](https://www.netlify.com/).

<br>

# 🧠 Understanding the Project
The easiest way to get to grips with this project is to take a look at the `src/pages/index.js` file. This file serves as an entry point to understanding the application and a base from which to explore the rest of the project and its components.

The file itself composes a series of core components that are named almost identically to the core sections of the website and mimic the structure of the main page. This similarity in structure is expressed by the following hierarchical diagram.

![](https://i.imgur.com/Uc1XfPM.png)

The rest of this section will explain the different groups of modules which make up the project including components, data, layouts and theming

<br>

## Components
Each of these core components and the sub-components which they utilize can be found within the `src/components` directory. Each component has a directory and contains an identically named `.js` and `.css` file which represent the component. Alongside these two files, the component can contain sub-components that mimic the same structure. An example of this structure is shown below.

![](https://i.imgur.com/xFaWn2d.png)

<br>

## Data
This project is a static website and does not communicate with nor contain an API. As a result, all the data structures you see when exploring the components come from static Javascript constants located within `src/constants`. These constants are denoted by capitalized snake case names such as `THEME_COLORS` or `PROGRAMMING_EXPERIENCES`.

The idea behind extracting these data objects from their components was to make them easier to maintain. For example, whenever I finish reading a book I head to the `src/constants/books.js` constant and add another book entry.

<br>

## Layouts and Theming
After exploring the project and coming to understand the `src/pages/index.js` file and the various components found within `src/components` you may be curious as to how the theming works and where the header and footer are used. The key to understanding these functionalities is within the `gatsby-ssr.js`. The official docs for this file can be found [here](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/)

`gatsby-ssr.js` is a file specific to Gatsby which provides the ability to hook into the Gatsby server-side rendering lifecycle. Aside from using this file to import global CSS files, I have utilized three internal Gatsby APIs to enable theming and layouts. Note that the theming solution was taken from a [dark theme blog](https://www.joshwcomeau.com/react/dark-mode/) post by Josh Comeau.

<br>

### onRenderBody
This Gatsby API function is run when generating our pages HTML during the build process. Alongside this API we also utilize the `setPreBodyComponents` function which injects a React element above everything else in the `<body>` tag. In this instance, I utilize these two API functions to inject a script that blocks the page render until it is complete.

This blocking script, called `MagicScriptTag` is responsible for checking the user's local browser storage for a theme item and then subsequently setting the appropriate theme via CSS variables. This script has to be blocking as we want the theme to be set before any content loads. For a more in-depth explanation of this functionality and why Kanye West makes an appearance in my code please see this [blog post](https://www.joshwcomeau.com/react/dark-mode/) by Josh Comeau which I followed.

<br>

### wrapPageElement
This Gatsby API allows page components to be wrapped by components that will not be unmounted on page changes. This is ideal for wrapping all my pages within my `src/components/base-layout` which contains my header and footer. This allows these components to keep their state between page changes and importantly does not reset the theme toggle button found in the top right.

<br>

### wrapRootElement
This Gatsby API allows components to wrap the root element of the application. I use this API to wrap my entire application with my `ThemeProvider` which utilizes react contexts to allow any component within my application to consume this provider and modify the theme.

<br>

## The blog
The blog functionality is based on the Gatsby starter blog template found [here](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog). The entry point for the blog is within the `src/pages/blog.js` which renders a component that displays all existing blog posts.

The blog posts are found within the `blog-posts` and `blog-post-drafts` directories with each post having a directory. These directories have a markdown file to house the content and any subsequent images the post uses.

These markdown files and images are turned into blog posts that each have their own page by the following process:
1. The raw markdown blog posts are transformed into `MarkdownRemark` nodes by [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/). This allows the markdown files to be transformed into HTML.
2. These `MarkdownRemark` post nodes are queried in the `gatsby-node.js` file and their HTML representation is passed to a blog template, `src/templates/blog.js` which defines common visual elements such as headers.
3. `gatsby-node.js` takes the final HTML blog posts and dynamically creates pages for each
4. These pages and their URLs (slugs) are then queried by components such as the `src/components/blog-home` to render previews and link to the blog pages

For more information please view the Gatsby starter blog template found [here](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog).

<br>

# 🛠️ Usage
After cloning this repository, installing Node.JS and navigating to the root directory you can use the following commands to start the project:
- `npm install`
- `npm run develop`

More commands can be found in the scripts section of the `package.json` and the [Gatsby.JS documentation](https://www.gatsbyjs.com/docs/reference/).

<br>

# ⛰️ Future Improvements
- Update all components to have two word names
- Update blog template to use BEM CSS structure
- Consider the google lighthouse report color contrast issues and think about potential theme changes to correct this
- Analyse the programming history component and think about ways to eliminate component Ref usage in favor of state or functional components
