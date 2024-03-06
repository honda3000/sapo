import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";

import SlideBar from "./components/SlideBar";

function App() {
  return (
    <div className=" ">
      <NavBar />
      <SlideBar />
      <Home />
      <About />
      <Tokenomics />
      
    </div>
  );
}

export default App;
