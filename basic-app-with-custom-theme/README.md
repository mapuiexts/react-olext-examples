# Getting Started with Custom Themes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to create application with custom themes:

In the project directory, you can run:

### Install Craco
Currently using the alpha version to support react-scripts 5. \
Run: npm i @craco/craco@7.0.0-alpha.3 --save

### Update package.json file
In the "scripts" section, replace "react-scripts" by "craco".


### Config npm variable
For the craco-less to be be installed, it will be needed this extra configuration. \
Run: npm config set legacy-peer-deps true

### Install craco-less

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Customize Theme
Rename src/App.css to src/App.less \
In the src/App.less replace replace "antd.css" by "antd.less" \
In the src/App.js replace "App.css" by "App.less"

### create craco.config.js file
See this file in the root folder of this application.

