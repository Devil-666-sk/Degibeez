import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import AboutDigiBeez from './Components/About/AboutDigiBeez';
import Career from './components/career/career'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Carousel />
      <AboutDigiBeez />
      <Career/>
    </>
  );
}

export default App;
