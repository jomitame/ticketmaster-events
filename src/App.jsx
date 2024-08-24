import { useState } from 'react';

import './App.css'
import Navbar from './components/Navbar';
import Events from './components/Events';
import SignupForm from './components/SignupForm';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
    { 
    /*
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
    */
      }
    <SignupForm/>  
    </>
  )
}

export default App
