# Project Structure

A rundown of the project structure is given below.

- `/blog/` - Contains the blog Markdown files. You can delete the directory if you do not want/need a blog. More details can be found in the blog guide
- `/docs/` - Contains the Markdown files for the docs. Customize the order of the docs sidebar in sidebars.js. More details can be found in the docs guide
- `/src/` - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files in here but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing
  - `/src/pages` - Any files within this directory will be converted into a website page. More details can be found in the pages guide
- `/static/` - Static directory. Any contents inside here will be copied into the root of the final build directory
- `/docusaurus.config.js` - A config file containing the site configuration. This is the equivalent of siteConfig.js in Docusaurus v1
- `/package.json` - slash-nlp is a React app. You can install and use any npm packages you like in them
- `/sidebar.js` - Used by the documentation to specify the order of documents in the sidebar
