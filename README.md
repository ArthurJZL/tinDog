# tinDog

A dog dating app

mongodb pswd: obOrj2Vo4RNhiJej

connection str: mongodb+srv://arthurjin1998:obOrj2Vo4RNhiJej@dogs.0ozfp.mongodb.net/?retryWrites=true&w=majority&appName=dogs

1. Identify your user(s)
   For dogs and their representatives (owners)
2. What is the problem you’re solving?
   To find mates for dogs
3. What is the solution?
   A dating app for dogs
4. What is the MVP scope? (core features you must get working)
   -auth
   -a database to upload, read, edit and delete data entry
   -A UI for logged-in users to browse random data entries and decide whether to save or forgo the entries
5. What are the tough technical challenges involved with solving this problem?
   Front-end/back-end connection

6. What are the stretch goals?
   Chat, Notification, Deploy

7. Setting Up Your Project Directory
   Choose a Directory:
   \*\*Decide on a directory where you want your project to live. There’s no need to initialize a Git repository unless you plan to share your code or need remote access.

Create the Main Project Folder:
\*\*For example, create a folder called “Test_App”. Avoid spaces and special characters as they tend to fuck things up.

Backend Directory:
\*\*Inside your project folder, create a folder to house your backend code, typically you would name this “Server”. (You don’t need to create a separate client folder here because Vite will handle that for you later.)

2. Creating the Backend (Server)
   Initialize the Backend Project:
   Open your terminal, navigate to your server folder, and run:
   npm init -y

This command creates a package.json file with default settings.

Install Dependencies:
\*\*Install Express (for handling HTTP requests) and nodemon (for auto-restarting your server during development- you can install both at the same time with the following command:
npm install express nodemon

Add a Start Script:
\*\*Open your package.json file and find the ‘scripts’ section, you want to add a script to run your server so you can type something like npm bananas to launch your server
For example add this:
"scripts": { "server": "nodemon server.js" }

This tells npm to run server.js with nodemon when you execute:
npm run server

Create the Server File:
\*\*In the server folder, create a file named server.js. This will be your entry point for the backend. Since this file is literally blank, you will need to add your own server code with express to handle incoming API requests (remember your Express lectures?)
Here is some boiler plate code to get started:

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => { res.send('Hello from the backend!'); });

// Start the server
app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}\`); });

3. Creating the Frontend with Vite
   Navigate to the Root Folder:
   \*\*Go back to the main project folder (the “Test_App” we made earlier) either using the terminal or the VS Browser and then…

Install Vite:
\*\*Follow the latest guide at Vite’s official site. At the time of writing, you can run:
npm create vite@latest

When prompted, choose a project name like, ‘My App’ and select the React framework option, and the Javascript language.

Note: Whatever you name your project is what the name of your client folder will be, so if you don’t have a specific name in mind, just name it ‘client’. I called my project ‘poop’ and changing it after the fact was a pain.

Install Dependencies for the Frontend:
**Once Vite has done it’s thing, navigate back to the new client folder in your terminal and install dependencies:
npm install 4. React AutoComplete and the Router Dom
Download the Rapid Fire Cannon (React Function Component):
**Eric demo’d a thing called the ES7+ React/Redux/React-Native Snippets extension which lets you create a new React Component boilerplate by typing:
rfc

In your VSCode. When you type rcf (React Function Component), and then hit TAB, it will auto-generate the component boilerplate.

Bonus Note: To take advantage of auto-imports, begin typing the component name when you are in your code and auto complete it with TAB, you should have a setting turned on by default that will automatically add the import to the top of the page if it’s missing. If this setting is not turned on for you, it’s a prettier thing. Google it.

Install React Router:
\*\*For client-side routing, install React Router DOM:
npm install react-router-dom

This creates a react-router-dom dependency. Not sure what it means but it’s what Eric said.

Make a Component:
\*\*This one is easy, make your main app component, pick something generic, like “App”. If react starts you off with one of these, you can use that.

Import Stuff to your Component:
\*\*In your main component (for example, in src/main.jsx or src/App.jsx), import the necessary components:
import { BrowserRouter, Routes, Route } from 'react-router-dom';

5. Final Thoughts
   From here you should go back to your server and set up your routing structure as needed. This is all of your app.use, gets, posts and puts. What you build is totally dependent on what you want your site to do.

Do you want a login? Build an authentication route, add encryption and set up a database to store passwords!

Do you want to import data from an api? Make a useState on the client to trigger an API call to the remote database & then setup a mongo db to store the results!

Do you want to make a pretty landing page? Slam some react components in your app and go nuts in CSS!

Using a fetch request to connect the front end and the backend like we learned to in class!

PS. It’s good practice to keep your server and client development environments separate, even if they share a common project folder because the separation helps manage dependencies and configurations specific to each part of your application.

Also, even though setting up Git isn’t required, it is highly recommended for version control and collaboration. If you do decide to make a git repo out of this, initialize a Git repository in the root folder and add .gitignore files for both node_modules in the client and server directories.

—-------------------------------------------------------------------------------------------------------------------------
