import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Carousel />
    </>
  );
}

export default App;
