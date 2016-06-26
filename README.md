# About
This is a blueprint for a TypeScript / React.js app bundled with webpack. It is not complete. Most tutorials with React.js use ES6 and other tutorials using TypeScript are outdated due to the ever-changing nature of the JavaScript ecosystem.

#Initial setup

Install and start MongoDB on the default port
From both the api/ and ui/ directores, run

    npm install 

#Running for development

From the backend project api/ run npm start

To start the webpack dev instance with hot module replacement, run

From the frontend project ui/ run 

	webpack-dev-server --hot --inline
	
and browse to http://localhost:9090

any changes made to the ui/ project will be hot reloaded immediately.


