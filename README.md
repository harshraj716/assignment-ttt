#assignment-ttt
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Live Project Link 

Click here to check the hosted website - [Hosted Link](https://assignment-ttt.vercel.app/)

## Library Used
### React

I opted for React due to its exceptional component-based architecture, which facilitates breaking down the project into reusable building blocks. This approach allows the creation of different components that can be easily assembled, fostering rapid development without redundant work.

The reusability offered by React not only accelerates development but also enhances efficiency. Its Virtual DOM and reconciliation algorithms play a pivotal role in ensuring speedy updates. The Virtual DOM acts as a blueprint, optimizing changes, while reconciliation efficiently updates only the necessary elements. The introduction of Hooks has streamlined state management, significantly simplifying the development process.

Moreover, React boasts a vibrant and supportive online community. This community serves as an invaluable resource whenever facing challenges or seeking guidance, making React not just a powerful framework but also a platform well-supported by a vast and knowledgeable community.

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

## My project images for all screen sizes.

![image](https://i.postimg.cc/g0TFXjZQ/Screenshot-2023-11-21-at-7-33-41-AM.png)
![image](https://i.postimg.cc/W3gWN16M/Screenshot-2023-11-21-at-7-33-28-AM.png)
![image](https://i.postimg.cc/brRmnV5r/Screenshot-2023-11-21-at-7-16-41-AM.png)

## Thank you



