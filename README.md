# react base
My base app for all react projects.

Using create-react-app to start a ReactJS base app for future projects. I have future plans for adding Next.js into this project.

## Features
create-react-app setup
app context api setup
firebase authentication and authorization
firebase database connection populating /users with user email on login
sign in / sign out with protected pages

## Before Starting
1. Setup a .env file in the root with your Firebase project details. You're going to need a api key, auth_domain, and database url.
2. See the .env variable names in the `base.js` file
3. Start the project.

## Starting the project
1. If I'm editing css and js, run `npm start` and in another terminal window `npm run styles:watch`

## Restrict access to certain pages
Use the higher order component `withAuthorization.js` and pass it an auth test.
See `DashboardPage.js` to see an example:

```export default withAuthorization(authCondition)(DashboardPage);```

`authCondition` is the condition that must pass to load the page.

## Set up third party provider authentication (google, facebook, github)
This app uses only email and password authentication to start with but the api is already there for other auth providers like google and facebook.
Enable those providers in your firebase project and use `authenticateWithProvider` in auth.js. Pass in the provider as a string. (e.g. 'Google', 'Facebook')
