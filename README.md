# Posts App

This app has been created by Jayesh Saini for demo pursoses. It is using the public API from JSONPlaceholder for the Posts API data.

Deployed Application Link: `https://angular-posts-app.vercel.app/`

## API Documentation

JSONPlaceholder - Guide: `https://jsonplaceholder.typicode.com/guide/`

Posts API Get Call: `https://jsonplaceholder.typicode.com/posts`

## Implementation

Angular app has the following routes: Home, New Post, Get Post and About. Home shows all the posts from the Get Posts API. New Post makes a Post call to the API. Get Post fetches a single post through GET request and passing the ID in url. Update and Delete has not been implemented because data doesn't change after the call. Bootstrap and CSS has been used for Styling.

## Details about the API Methods:

The API has all the routes for GET, POST, UPDATE & DELETE. But POST, UPDATE, & DELETE don't actually change the data. They just reflect in the API calls. Check the network calls in Developer Tools for API requests and success codes.

GET call - Status code: 200

POST call - Status code: 201

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
