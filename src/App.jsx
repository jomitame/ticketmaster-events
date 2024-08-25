import { useRef, useState } from 'react';

import './App.css'
import Navbar from './components/Navbar';
import Events from './components/Events';


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef();

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef}/>
      <Events searchTerm={searchTerm} />
    </>
  )
}

export default App
