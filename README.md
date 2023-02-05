# 🌦 Weather App

Redesigned of [dribbble design](https://dribbble.com/shots/7118235-Weather-DailyUI-037)

A simple weather app in react js using the OpenWeatherMap API and GeoDB API with places autocomplete. Weather can be searched by entering city in the search bar.

Made using React built-in hooks (useState, useEffect, useCallback) and React custom hook (Maybe unnecessary for a small app like this, but it was for learning purpose).

## Demo

You can see the demo [here](https://shiva-ese-reactjs-weather-app.netlify.app/) 👈👈

## Screenshots

## Features

◼️ Celcius to Fahrenheit conversion and vice versa\
◼️ Displays present weather conditions of the searched city.\
◼️ Shows a list of city Suggestions after you enter a name in the search bar.\
◼️ Search cities worldwide.\
◼️ Dynamic weather background videos for each weather condition.\
◼️ Display current weather details like temperature, humidity, wind speed, and pressure of the searched city.\
◼️ Display the current time of the searched city.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.
Create a file called .env in the root of the React Weather App project. Add the following api keys in the file.

`REACT_APP_API_KEY = <Your Weather API key>` for OpenWeatherMap API.

`REACT_APP_RapidAPI_Key = <Your GeoDB API key>` for GeoDB API.

- I used Pexels API for Background Video links (https://www.pexels.com/api/).

## 🚀 Technologies Used

**ReactJS,** **TailwindCSS**

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
