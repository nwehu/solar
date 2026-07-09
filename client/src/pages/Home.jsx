import TopHeader from "../components/TopHeader/TopHeader";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Projects from "../components/Projects/Projects";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer"
function App() {
  return (
    <>
      <TopHeader />
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <WhyChoose/>
      <Projects/>
      <Testimonials/>
      <Footer/>

    </>
  );
}



export default App;