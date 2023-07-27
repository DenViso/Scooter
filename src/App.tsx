import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductInfo from "./components/ProductInfo";
import Motor from "./components/Motor";
import Modes from "./components/Modes";
import Gallery from "./components/Gallery";
import Color from "./components/Color";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <div className="wrapper">
     <Header/>
     <Hero/>
     <ProductInfo/>
     <Motor/>
     <Modes/>
     <Gallery/>
     <Color/>
     <Testimonials/>
     <Subscribe/>
     <Footer/>
    </div>
   
  );
}

export default App;
