import React from 'react';

function App() {
  return (
    <div className='center-content'>
      <h1>Lab10c My React App Experience</h1>

      <h2>Installation of React:</h2>
      <p>
        To get started with React, I ensured that Node.js and npm were installed on my machine. If you haven't installed them yet, you can download and install them from{' '}
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          https://nodejs.org/
        </a>
        .
      </p>
      <p>
        Once Node.js and npm were set up, I used the following command in the terminal to create a new React app using the <code>create-react-app</code> tool:
      </p>
      <pre>
        <code>npx create-react-app my-react-app</code>
      </pre>

      <h2>Navigating to the Project Directory:</h2>
      <p>
        After the app was created, I navigated to the project directory using the command:
      </p>
      <pre>
        <code>cd my-react-app</code> 
        <p> (in our case i named it lab10)</p>
      </pre>

      <h2>Building the Page:</h2>
      <p>
        With the project directory in focus, I started the development server using the command:
      </p>
      <pre>
        <code>npm start</code>
      </pre>
      <p>
        This command initiated the development server and opened a new tab in my default browser with the React app running. The development server provides live reloading, 
        allowing changes made to the code to be automatically reflected in the browser. This part gave me a little trouble because at first the app did not want to start and it kept saying 
        that the script for start did not exist.
      </p>

      <h2>Modifying the React Component:</h2>
      <p>
        I opened the <code>src/App.js</code> file in my code editor to make modifications to the default React component. Here, I customized the content to suit my 
        preferences and requirements. After this it was quite simple just editing like i would normally to a regular HTML page
           </p>
    </div>
  );
}

export default App;
