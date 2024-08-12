import React, { useState } from 'react';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Routes } from './components/Routes';

//since there is export const and not export default in Navbar.jsx, we need to import it as {Navbar}

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>

  );
};

export default App;


// setDarkTheme={setDarkTheme}: This is passing the setDarkTheme function as a prop to the Navbar component. 
// This function allows the Navbar component to toggle the darkTheme state.

// darkTheme={darkTheme}: This is passing the current value of the darkTheme state as a prop to the Navbar component.
//  This allows the Navbar component to know whether the dark theme is currently enabled or not.