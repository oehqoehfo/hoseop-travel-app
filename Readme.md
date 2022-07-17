# This Application
This application is a travel web application made with JavaScript. Users can submit the city that user wants to visit and the site will show popular travel attractions in the city

## Languages that are used 
### Frontend:
- SCSS
- HTML
- ReactJS
- TypeScript
- TailwindCSS
### Backend:
- Node.js
- Express

## Tools that are used
- Visual Studio Code (Code Editor)
- Prepros (Helps to convert SCSS to CSS file)

### Frontend JavaScript
`/src`
#### App.tsx
A ReactJS file that contains main component. When user visits the page, user will see this component. 

#### index.tsx
Main Reactjs File made with TypeScript. Calls main component declared inside App.tsx and renders it.  

#### Result.tsx
A ReactJS file that will be rendered when user performs search action. In this file users will se data returned from API server. 

### Backend JavaScript
`/server/src`

#### index.js
This is main express server file. This file will get requests sent from frontend part and then send request to our 3rd party API server and then return data to frontend part. 

#### words.js
In this project, API returns travel attractions that are located in city that user has searched. Name of some travel attractions that are returned from API server were written in non-latin characters. This file is for converting non-latin names to latin-names. 