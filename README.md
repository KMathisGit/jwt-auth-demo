This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is the purpose of this?

This project serves as a demo for a simple dev environment that comes equipped with the following:

- React
- Material-UI (component library for react)
- React-hook-form + yup (forms and schemas)
- axios (HTTP client)
- json-server (mock db server)
- json-web-token (issues JWT for authentication)
- Cypress (testing suite)

## Running App

After cloning repo and running `npm install`, you can start the application by running `npm start`. This should open the react app in the browser, if not - navigate to [http://localhost:3000](http://localhost:3000).

## Logging in

Upon launching the React app you will see a login form. The project comes preloaded with 1 user. You can use the username: `admin` and password: `admin` to login or you can register a new user by clicking the register button at bottom of login form.

## Testing Authentication

Testing authentication is done via the company listing page.
[http://localhost:3000/companies](http://localhost:3000/companies)

After logging in, you will automatically be redirected to this page.

The endpoint that serves the company data requires the JWT to be present in the Header of the request.

The JWT is gathered upon a successful login and is stored in the app memory. If you have not logged in during the session or refresh the application you will not have a JWT which will prevent you from retrieving the data on the company listing page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs both the React app (in development mode) and json-server which is the mock API for authentication and CRUD operations.

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

The json-server will be running on [http://localhost:3001](http://localhost:3001).

### `npm run cy`

Running this command is the same as `npm start` but this will also open up cypress to allow testing.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
