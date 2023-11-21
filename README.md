#assignment-ttt

This project is a web application built with modular components structured into `public` and `src` directories:

### Public Folder

Contains the main HTML file (`index.html`) and all associated images.

### SRC Folder

- **Components Folder**: Contains modular React components responsible for various sections of the application UI.
  - main.jsx
  - Heading.jsx
  - Icon.jsx
  - Navbar.jsx
  - Text.jsx
  - Post.jsx

- **Styles Folder**: Employs a module-based styling approach, housing separate CSS modules for each component to ensure isolation and reusability of styles.

## App.js

The `App.js` file is the starting point for the application and performs essential functions:

- Renders all modules
- Imports `profile.js` to retrieve post data
- Calls the `<Head>` component with profile as a prop
- Uses `<Post>` component, passing post and id as props through a map for all available posts in the data file

## Components Overview

- **Navbar.jsx**: Contains the application's navigation bar, displaying the logo and a stories button.
- **Head.jsx**: Renders the header section with a background image, profile picture, name, and additional details.
- **Post.jsx**: Responsible for the layout of posts, initially displaying posts in three lines with ellipsis and expanding to the original size upon click. Renders HTML-formatted data from the `profile.js` file.
- **Footer.jsx**: Includes a copyright statement and two links for Instagram and LinkedIn.

## Profile.js

The `profile.js` file acts as a data source for the website, containing information about the profile:

- ID: "Anujgosalia"
- Name: "Anuj Gosalia"
- Profile Picture: "profile.jpg"
- Background Image: "bgPic.png"
- Followers: "6482"
- Following: "245"
- Description: "Co-founder & CEO at Terribly Tiny Tales"
- Instagram: [Instagram Profile](https://www.instagram.com/anujgosalia)



