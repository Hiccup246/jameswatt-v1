# 👨🏻‍💻 [James Watt Personal Website](https://www.jameswatt.io)
This github repo represents my personal website which I created to act as an interactive resume and to build upon my technological skills.

I specifically wanted to build upon my ability to create components from scratch and manage CSS. As such I developed this project under the limitations that:
- No css frameworks be utlised
- As few third party libraries as possible be used

# The home page
The way I think about and perceive my project starts at the `gatsby-ssr.js` file. This file is responsible for setting the light/dark theme and wrapping all the projects page within the `BaseLayout.js`.

From here I think about the `src/index.js` file which contains all the key components that make up my home page. This `index.js` mimics the home page in structure as much as possible to remain easy to understand and to aid in quickly delving deeper into the sub components which make up the page.

This description can be made visual via the following diagram:



# The blog
The blog functionality




# Future Improvements
- Update blog template to use BEM css structure
- Consider the google lighthouse report color contrast issues and think about potential theme changes to correct this
- Analyse the programming history component and think about ways to eliminate component Ref usage in favour of state or functional components
