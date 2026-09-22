import NavBar from "./components/NavBar.jsx";
import Background from "./components/Background.jsx";
import Hero from "./components/Hero.jsx";
import Body from "./components/Body.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";
function App(){
  return(
    <div>
     <Background />
      <NavBar />
      <Hero />
      <Body />
      <Cta />
      <Footer />
    </div>
  )
}

export default App;