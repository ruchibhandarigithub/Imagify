import React, { useState }  from "react";
import './App.css';
import Images from './components/Images';

import useImages from './data/useImages.js'
import Navbar from './components/Navbar';
import Carousel from "./components/Carousel";
import Footer from './components/Footer';

function App() {
  const [search,setSearch] = useState('cat');
  const images = useImages(search);
  
 
  return (
    <div>
      <Navbar setSearch={setSearch} />
      <Carousel  images={images.slice(0,4)} />
      <Images data ={images}/>
      <Footer />
    </div>
  );
}

export default App;
