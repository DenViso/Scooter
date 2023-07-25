import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductInfo from "./components/ProductInfo";
import Motor from "./components/Motor";
import Modes from "./components/Modes";
import Gallery from "./components/Gallery";
import Color from "./components/Color";
import Testimonials from "./components/Testimonials";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="wrap">
     {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/1" element={<Hero/>}/>
        <Route path="/2" element={<ProductInfo/>}/>
      </Routes>
     </BrowserRouter> */}
     <Header/>
     <Hero/>
     <ProductInfo/>
     <Motor/>
     <Modes/>
     <Gallery/>
     <Color/>
     <Testimonials/>
    </div>
  );
}

export default App;
