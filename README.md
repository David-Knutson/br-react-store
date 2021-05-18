# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initial setup (fresh vm)

0.  Get [node](https://nodejs.org/en/)
1.  Get yarn `npm install -g yarn`
2.  Clone the repo `git clone https://github.com/David-Knutson/br-react-store.git && cd br-react-store`
3.  Create a .env file with the REACT_APP_BACKEND_ENDPOINT=yourEndPoint
4.  Initialize the project `yarn --init`
5.  Build the project `yarn build`
6.  Start the server `yarn start`

**Please note that there appears to be an issue with the mock API endpoint provided (CORS Network Errors and 302 redirects). There is a useEffect hook that is commented out in ProductDescription.tsx. If you uncomment the useEffect and reinstate the missing imports the React App will correctly handle any errors, but it will not fetch the data as expected. I have included a MockData.ts file to work around this issue and to further demonstrate my handling of app state using Redux.**

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
