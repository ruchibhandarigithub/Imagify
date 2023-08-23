import React, { useState }  from "react";
import './App.css';
import Images from './components/Images';

import useImages from './data/useImages.js'
import Navbar from './components/Navbar';

function App() {
  const [search,setSearch] = useState('nature')
  const images = useImages(search);
  
 
  return (
    <div>
      <Navbar setSearch={setSearch} />
      
      <Images data ={images}/>
    </div>
  );
}

export default App;
