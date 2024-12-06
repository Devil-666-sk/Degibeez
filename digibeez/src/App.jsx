import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import AboutDigiBeez from './Components/About/AboutDigiBeez';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Carousel />
      <AboutDigiBeez />
    </>
  );
}

export default App;
